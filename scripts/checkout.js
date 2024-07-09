"use strict"

window.onload = () => {
    const cart = document.querySelector("#cartTable");
    const cartBody = document.querySelector("#cartBody");

    populateTable(cartBody);
}

function populateTable(tbody) {
    const x = sessionStorage.cart;
    const cleanX = JSON.parse(x);

    let math = 0;
    let counter = 1;

    for (let key in cleanX) {
        let cartItem = cleanX[key];

        math += cartItem.price;

        console.log(key, cleanX[key]);

        const newRow = tbody.insertRow();

        // do numberlogic eventually
        cleanBen(newRow, counter, false);
        cleanBen(newRow, cartItem["title"], false);
        cleanBen(newRow, cartItem["price"], true);

        counter++;
    }

    console.log(math);

    // this last bit will do for now, but this could probably be rewritten here and the lines above
    const newRow = tbody.insertRow();

    cleanBen(newRow, "", false);
    cleanBen(newRow, "Total", false);
    cleanBen(newRow, math, true);
}

function cleanBen(row, value, isItMoney) {
    const cell = row.insertCell();

    if (isItMoney) {
        cell.innerHTML = `$ ${value}`;
    } else {
        cell.innerHTML = value;
    }
}