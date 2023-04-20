// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) ==="Empty") {
        window.alert("All fields must be filled out.");
        event.preventDefault();
    } else if (validateInput(cargoLevel) === 'Not a Number' || validateInput(fuelLevel) === 'Not a Number') {
        window.alert("Please enter a number for Fuel Level (L) and Cargo Mass (kg)");
        event.preventDefault();
    }

    document.getElementById('pilotStatus').innerHTML += ` ${pilot}`
    document.getElementById('copilotStatus').innerHTML += ` ${copilot}`
    let launchStatusDiv = document.getElementById('faultyItems');
    let launchStatusHead = document.getElementById('launchStatus');

    console.log(fuelLevel);
    if (fuelLevel < 10000) {
        launchStatusDiv.style.visibility="visible";
        launchStatusHead.innerHTML="Shuttle not ready for launch"
        launchStatusHead.style.color="red"
        console.log(launchStatusDiv);
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
