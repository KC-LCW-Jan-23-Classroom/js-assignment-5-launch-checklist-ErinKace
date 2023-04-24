// Write your JavaScript code here!


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, pickedPlanet['name'], pickedPlanet['diameter'], pickedPlanet['star'], pickedPlanet['distance'], pickedPlanet['moons'], pickedPlanet['image']);
   })

   let launchForm = document.querySelector("form");

   launchForm.addEventListener('submit', (event) => {
    let pilotName = document.querySelector("input[name=pilotName]").value;
    let copilotName = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoMass = document.querySelector("input[name=cargoMass]").value;
   //  console.log(pilotName,copilotName,fuelLevel,cargoMass);
    
    formSubmission(document, listedPlanets, pilotName, copilotName, fuelLevel, cargoMass);
    event.preventDefault();

    });
   
});