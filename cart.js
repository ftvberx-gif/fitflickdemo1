// ===============================
// FITFLICK CART SYSTEM
// ===============================

function getCart() {
    return JSON.parse(localStorage.getItem("fitflickCart")) || [];
}


function saveCart(cart) {
    localStorage.setItem("fitflickCart", JSON.stringify(cart));
}


// ADD TO CART
function addToCart(name, price, image) {

    let cart = getCart();

    // Check whether product already exists
    let existingProduct = cart.find(
        item => item.name === name
    );

    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            image: image,
            quantity: 1
        });

    }

    saveCart(cart);

    alert(name + " added to cart!");

    // Go to cart after clicking OK
    window.location.href = "cart.html";
}


// BUY NOW
function buyNow(name, price, image) {

    let cart = [{
        name: name,
        price: Number(price),
        image: image,
        quantity: 1
    }];

    saveCart(cart);

    window.location.href = "cart.html";
}


// CART COUNT
function updateCartCount() {

    let cart = getCart();

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    const cartCount =
        document.getElementById("cartCount");

    if (cartCount) {
        cartCount.textContent = count;
    }
}


updateCartCount();