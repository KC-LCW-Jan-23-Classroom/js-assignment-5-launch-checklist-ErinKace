// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse =myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   let launchForm = document.querySelector("form");

   launchForm.addEventListener('submit', (event) => {
    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
   //  console.log(pilotName,copilotName,fuelLevel,cargoMass);
    
    formSubmission(document, listedPlanets, pilotName, copilotName, fuelLevel, cargoMass);

    fuelLevel = Number(fuelLevel);
    cargoMass = Number(cargoMass);

    document.getElementById('pilotStatus').innerHTML += ` ${pilotName}`
    document.getElementById('copilotStatus').innerHTML += ` ${copilotName}`
    let launchStatusDiv = document.getElementById('faultyItems');
    let launchStatusHead = document.getElementById('launchStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');

    // console.log(fuelLevel);
    if (fuelLevel < 10000) {
        launchStatusDiv.style.visibility="visible";
        launchStatusHead.innerHTML="Shuttle not ready for launch"
        launchStatusHead.style.color="red"
        fuelStatus.innerHTML="Not enough fuel for launch."
        console.log(launchStatusDiv);
    }

    if (cargoMass > 10000) {
        launchStatusDiv.style.visibility=visible;
        launchStatusHead.innerHTML="Shuttle not ready for launch"
        launchStatusHead.style.color="red"
        cargoStatus.innerHTML="Too much mass for launch."
    }
    
    });
   
});