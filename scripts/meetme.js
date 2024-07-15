"use strict"

window.onload = () => {
    let dogSection = document.querySelector("#dogSection");
    let urlParameters = new URLSearchParams(location.search);
    console.log(urlParameters);
    let dogName = urlParameters.get("name");
    console.log(dogName);

    let dogInfo = fetchDogInfo(dogName);
    console.log(dogInfo);

    displayDog(dogInfo, dogSection);
}

function fetchDogInfo(dogName) {
    let desiredDog;

    for (let i = 0; i < dogs.length; i++) {
        let currentDog = dogs[i];
        console.log(i, currentDog.title, dogName);

        if (currentDog.title === dogName) {
            console.log("match");
            desiredDog = currentDog;
            break;
        }
    }
    return desiredDog;
}

function displayDog(dogInfo, section) {
    section.innerHTML = `
    <h1 class="text-center pb-5">Meet ${dogInfo.title}:</h1>
    <div class="d-flex justify-content-between">
        <aside class="w-50 px-3">
            <img src="${dogInfo.img}" class="w-100">
        </aside>
        <aside class="w-50 px-3">
            <p class="w-100">${dogInfo.bio}<p>
        </aside>
    </div>

    `;
}

function prettifyBio(bio) {

}