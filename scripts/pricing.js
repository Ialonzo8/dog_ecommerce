"use strict"

window.onload = () => {
    let cartAsObject = {};

    if (sessionStorage.cart) {
        cartAsObject = JSON.parse(sessionStorage.cart);
    }

    let buttons = document.querySelectorAll("[id*='cartButton']");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => addToCart(event, cartAsObject));
    });
}

function addToCart(event, cartAsObject) {
    const currentButton = event.target;
    const buttonNumber = (currentButton.id[10]);
    const associatedDog = dogs[buttonNumber - 1];

    let lastNumber = Object.keys(cartAsObject).length;

    let isItNew = true;

    for (let key in cartAsObject) {
        // JavaScript, for the purposes of comparing objects, actually just compares their addresses,
        // therefor, we stringify and then compare, since the results are not longer objects
        if (JSON.stringify(cartAsObject[key]) == JSON.stringify(associatedDog)) {
            isItNew = false;
            break;
        }
    }

    if (isItNew) {
        cartAsObject[`item${lastNumber + 1}`] = associatedDog;
        sessionStorage.cart = JSON.stringify(cartAsObject);
    } else {
        alert("this dog has already been added to the cart");
    }
}