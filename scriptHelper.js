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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) ==="Empty") {
        window.alert("All fields must be filled out.");
    } else if (validateInput(cargoLevel) === 'Not a Number' || validateInput(fuelLevel) === 'Not a Number') {
        window.alert("Please enter a number for Fuel Level (L) and Cargo Mass (kg)");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Make sure to enter valid information for each field");
    } else {
        fuelLevel = Number(fuelLevel);
        cargoLevel = Number(cargoLevel);
    
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`
        let launchStatusDiv = document.getElementById('faultyItems');
        let launchStatusHead = document.getElementById('launchStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let cargoStatus = document.getElementById('cargoStatus');
    
        console.log(fuelLevel);
        if (fuelLevel < 10000) {
            launchStatusDiv.style.visibility="visible";
            launchStatusHead.innerHTML="Shuttle Not Ready for Launch";
            launchStatusHead.style.color="rgb(199, 37, 78)";
            fuelStatus.innerHTML="Fuel level too low for launch";
            // console.log(launchStatusDiv);
        }  else {
            fuelStatus.innerHTML="Fuel level high enough for launch";
        }
    
        if (cargoLevel > 10000) {
            launchStatusDiv.style.visibility="visible";
            launchStatusHead.innerHTML="Shuttle Not Ready for Launch";
            launchStatusHead.style.color="rgb(199, 37, 78)";
            cargoStatus.innerHTML="Cargo mass too heavy for launch";
        } else {
            cargoStatus.innerHTML="Cargo mass low enough for launch"
        }
        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatusHead.style.color="rgb(65, 159, 106)";
            launchStatusDiv.style.visibility="visible";
            launchStatusHead.innerHTML="Shuttle is Ready for Launch";   
        }
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
