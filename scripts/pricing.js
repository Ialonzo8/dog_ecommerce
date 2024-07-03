"use strict"


window.onload = () => {

    displayProduct();


    // Grab the dropdown from the HTML to work
    let dropdown = document.querySelector("#productSelect");

    showorHideImage(dropdown);


    // Add event listeners
    dropdown.addEventListener("change", displayCards);

    dropdown.addEventListener("change", (event) => showorHideImage(event.target));



}

function showorHideImage(dropdown) {
    
    // Get selected value of the dropdown
    let selectedProduct = dropdown.value

    // Define a list of all possible IDs
    let allIds = ["#one", "#two", "#three", "#four", "#five", "#six"];

    // Hide all elements by default
    allIds.forEach(id => hideElement(id));

    // Show the corresponding element based on selectedProduct
    switch (selectedProduct) {
        case "male":
            showElement("#one");
            break;
        case "female":
            showElement("#two");
            break;
        case "Black":
            showElement("#three");
            break;
        case "Fawn":
            showElement("#four");
            break;
        case "Blue":
            showElement("#five");
            break;
        case "Blue Merle":
            showElement("#six");
            break;
        default:
            // If none of the above match, hide all elements
            allIds.forEach(id => hideElement(id));
            break;
    }
}


let displayCards = (event) => {


    //get selected value of the dropdown
    let selectedProduct = event.target.value;

    let dog = dogs.find((dog) => {
        return dog.title === selectedProduct;
    });

    if (dog) {
        console.log(`Selected dog: ${dog.title}`);
        // You can display or manipulate data related to the selected dog here
    } else {
        console.log(`No dog found with title: ${selectedProduct}`);
    }
}

let displayProduct = () => {

    let dropdown = document.querySelector("#productSelect");

    let defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "--Select A Corso--";


    dropdown.appendChild(defaultOption);
    // dropdown.appendChild(viewAllOption);

    dogs.forEach((dog) => {

        //create the new option for the category we are on in the loop
        let newOption = document.createElement("option");

        //set the value for the option
        newOption.value = dog.title;

        //set what the user sees 
        newOption.textContent = dog.title;

        dropdown.appendChild(newOption);


    })



}

//This function will hide an HTML element on the page
//Just pass it the id of the element you want to hide
function hideElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "none";
}

//This function will show an HTML element on the page
//Just pass it the id of the element you want to show
function showElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "block";
}