// ****************************
// ****** Inches To Feet ******
// ****************************

function inchesToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var yourInches = 144;

var result = inchesToFeet(yourInches);
console.log(result);

// ****************************
// ******** Mile to Km ********
// ****************************

function milesToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var yourMiles = 34;
var result = milesToKilometer(yourMiles);
console.log(yourMiles, "Miles  is equals to", result, "kilometer");