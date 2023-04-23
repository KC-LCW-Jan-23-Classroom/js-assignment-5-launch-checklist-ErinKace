// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let newDestination = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`

    document.getElementById('missionTarget').innerHTML = newDestination;
}

function validateInput(testInput) {

    if(testInput === "" || testInput === null || testInput === undefined) {
        // console.log('test input: '+testInput);
        return "Empty"
    } else if (!isNaN(testInput)) {
        return "Is a Number"
    } else {
        return "Not a Number"
    }

}

function formSubmission(document, event, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) ==="Empty") {
        window.alert("All fields must be filled out.");
        event.preventDefault();
    } else if (validateInput(cargoLevel) === 'Not a Number' || validateInput(fuelLevel) === 'Not a Number') {
        window.alert("Please enter a number for Fuel Level (L) and Cargo Mass (kg)");
        event.preventDefault();
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Make sure to enter valid information for each field");
        event.preventDefault();
    } else {
        fuelLevel = Number(fuelLevel);
        cargoLevel = Number(cargoLevel);
    
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`
        document.getElementById('copilotStatus').innerHTML = `Copilot ${copilot}is ready for launch`
        let launchStatusDiv = document.getElementById('faultyItems');
        let launchStatusHead = document.getElementById('launchStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let cargoStatus = document.getElementById('cargoStatus');
    
        console.log(fuelLevel);
        if (fuelLevel < 10000) {
            launchStatusDiv.style.visibility="visible";
            launchStatusHead.innerHTML="Shuttle not ready for launch"
            launchStatusHead.style.color="rgb(199, 37, 78)"
            fuelStatus.innerHTML="Not enough fuel for launch."
            console.log(launchStatusDiv);
        }
    
        if (cargoLevel > 10000) {
            launchStatusDiv.style.visibility="visible";
            launchStatusHead.innerHTML="Shuttle not ready for launch"
            launchStatusHead.style.color="rgb(199, 37, 78)"
            cargoStatus.innerHTML="Too much mass for launch."
        }
        event.preventDefault();
    }

}

async function myFetch() {
    let planetsReturned=[];

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
         return response.json();
        });
    console.log(planetsReturned);

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random()*planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
