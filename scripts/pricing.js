"use strict"


window.onload = () => {

    displayProduct();


    // Grab the dropdown from the HTML to work
    let dropdown = document.querySelector("#productSelect");
    //grab the button off the html yo show all doggies
    let button = document.querySelector("#viewAll");

    button.addEventListener("click", showAll);

    showorHideImage(dropdown);


    // Add event listeners
    dropdown.addEventListener("change", displayCards);

    dropdown.addEventListener("change", (event) => showorHideImage(event.target));



}

function showAll(event){
    console.log("hey")

    event.preventDefault();

    showElement("#one");
    showElement("#two");
    showElement("#three");
    showElement("#four");
    showElement("#five");
    showElement("#six");

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
        case "Rocky (Grey)":
            showElement("#one");
            break;
        case "Daisy (White)":
            showElement("#two");
            break;
        case "Smokey (Black)":
            showElement("#three");
            break;
        case "Bailey (Fawn)":
            showElement("#four");
            break;
        case "Bluey (Blue)":
            showElement("#five");
            break;
        case "Vemon (Blue Merle)":
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