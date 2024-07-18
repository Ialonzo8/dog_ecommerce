"use strict"

window.onload = () => {
    const cartTableBody = document.querySelector("#cartTableBody");

    let cartArray = [];

    // this runs if an empty cart array exists in storage. Suboptimal but negligible
    if (sessionStorage.cart) {
        cartArray = JSON.parse(sessionStorage.cart);
    }

    populateTable(cartTableBody, cartArray);

    let deleteButtons = document.querySelectorAll(".deleteButton");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => removeCartItem(event, cartArray));
    })
}

function removeCartItem(event, cartArray) {
    event.preventDefault();

    let currentButton = event.target;
    let relativeRow = currentButton.parentElement;
    let dogPrice = console.log(Number(relativeRow.previousSibling.innerHTML));
    let dogInCart = relativeRow.previousSibling.previousSibling.innerHTML;

    cartArray.forEach((cartItem) => {
        if (cartItem.title === dogInCart) {
            let index = cartArray.indexOf(cartItem);
            cartArray.splice(index, 1);
            sessionStorage.cart = JSON.stringify(cartArray);

            // this reloads the page, it's a quick solution to the headache of recalculating the total and deleting cells
            location.reload();
        }
    });
}

function cartToArray(cart) {
    let cartArray = [];

    return cartArray;
}


function populateTable(tbody, cartArray) {

    let total = 0;
    cartArray.forEach((cartItem, idx) => {
        let cartItemNumber = (idx + 1);

        total += cartItem.price;

        const newRow = tbody.insertRow();

        createCell(newRow, cartItemNumber, false);
        createCell(newRow, cartItem["title"], false);
        createCell(newRow, cartItem["price"], true);
        createCell(newRow, `<button class="btn btn-secondary deleteButton">Delete</button>`, false);
    });

    console.log(total);

    // this last bit will do for now, but this could probably be rewritten here and the lines above
    const newRow = tbody.insertRow();

    createCell(newRow, "", false);
    createCell(newRow, "Total", false);
    createCell(newRow, total, true);
    createCell(newRow, `<button class="btn btn-light" id="clearCartButton">Clear All</button>`, false);

    let clearCartButton = document.querySelector("#clearCartButton");
    clearCartButton.addEventListener("click", (event) => clearCart(event, cartArray));
}

function clearCart(event, cartArray) {
    event.preventDefault();

    cartArray = [];
    sessionStorage.cart = JSON.stringify(cartArray);

    // this reloads the page, it's a quick solution to the headache of recalculating the total and deleting cells
    location.reload();
}

function createCell(row, value, isItMoney) {
    const cell = row.insertCell();

    if (isItMoney) {
        cell.innerHTML = `$ ${value}`;
    } else {
        cell.innerHTML = value;
    }
}