// Code your solution in this file!
const hq = 42
function distanceFromHqInBlocks(newLocation) {
    if (newLocation >= hq) {
        return newLocation - hq;
    }
    else if (newLocation < hq) {
        return hq - newLocation;}
}

function distanceFromHqInFeet(newLocation) {
    return (distanceFromHqInBlocks(newLocation) * 264);
}

// function distanceTravelledInFeet(startLocation, endLocation) {
//     let distanceTravelled = (endLocation - startLocation) * 264;
//     return Math.abs(distanceTravelled);
// }
function distanceTravelledInFeet(startLocation, endLocation) {
    if (endLocation >= startLocation) {
        return (endLocation - startLocation) * 264;
    } 
    else if (endLocation < startLocation) {
        return (startLocation - endLocation) * 264;
    }
}
function calculatesFarePrice(startLocation, endLocation) {
    if (distanceTravelledInFeet(startLocation, endLocation) <= 400) {
        return 0
    }
    // else if (distanceTravelledInFeet(startLocation, endLocation) > 400 && 
    else if (distanceTravelledInFeet(startLocation, endLocation) <= 2000) {
        return (distanceTravelledInFeet(startLocation, endLocation) - 400) * .02
    }
    // else if (distanceTravelledInFeet(startLocation, endLocation) > 2000 && 
    else if (distanceTravelledInFeet(startLocation, endLocation) <= 2500) {
        return 25
    }
    else {
        return "cannot travel that far"
    }
}