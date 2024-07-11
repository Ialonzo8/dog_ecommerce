"use strict"

window.onload = () => {
    const cartTableBody = document.querySelector("#cartTableBody");

    populateTable(cartBody);
}

function populateTable(tbody) {
    const cartData = sessionStorage.cart;
    const cartDataAsObject = JSON.parse(cartData);

    let total = 0;
    let cartItemNumber = 1;

    for (let key in cartDataAsObject) {
        let cartItem = cartDataAsObject[key];

        total += cartItem.price;

        console.log(key, cartDataAsObject[key]);

        const newRow = tbody.insertRow();

        createCell(newRow, cartItemNumber, false);
        createCell(newRow, cartItem["title"], false);
        createCell(newRow, cartItem["price"], true);

        cartItemNumber++;
    }

    console.log(total);

    // this last bit will do for now, but this could probably be rewritten here and the lines above
    const newRow = tbody.insertRow();

    createCell(newRow, "", false);
    createCell(newRow, "Total", false);
    createCell(newRow, total, true);
}

function createCell(row, value, isItMoney) {
    const cell = row.insertCell();

    if (isItMoney) {
        cell.innerHTML = `$ ${value}`;
    } else {
        cell.innerHTML = value;
    }
}