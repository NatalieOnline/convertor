let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let kiloEl = document.getElementById("kilo-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value);  // Parse input as a float

    // Length conversion
    let lengthInFeet = baseValue * meterToFeet;
    let lengthUnit = baseValue !== 1 ? 'meters' : 'meter';
    let feetUnit = baseValue !== 1 ? 'feet' : 'foot';
    lengthEl.textContent = `${baseValue} ${lengthUnit} = ${lengthInFeet.toFixed(2)} ${feetUnit}`;

    // Volume conversion
    let volumeInGallons = baseValue * literToGallon;
    let literUnit = baseValue !== 1 ? 'litres' : 'litre';
    let gallonUnit = baseValue !== 1 ? 'gallons' : 'gallon';
    volumeEl.textContent = `${baseValue} ${literUnit} = ${volumeInGallons.toFixed(2)} ${gallonUnit}`;

    // Weight conversion
    let weightInPounds = baseValue * kiloToPound;
    let kiloUnit = baseValue !== 1 ? 'kilograms' : 'kilogram';
    let poundUnit = baseValue !== 1 ? 'pounds' : 'pound';
    kiloEl.textContent = `${baseValue} ${kiloUnit} = ${weightInPounds.toFixed(2)} ${poundUnit}`;
    
    // Update units based on whether the value is 1 or more
    updateUnits(baseValue);
});

function updateUnits(value) {
    let lengthUnits = value !== 1 ? 'meters to feet' : 'meter to foot';
    let volumeUnits = value !== 1 ? 'litres to gallons' : 'litre to gallon';
    let weightUnits = value !== 1 ? 'kilograms to pounds' : 'kilogram to pound';

    document.getElementById('length-el').previousElementSibling.innerText = `Length (${lengthUnits})`;
    document.getElementById('volume-el').previousElementSibling.innerText = `Volume (${volumeUnits})`;
    document.getElementById('kilo-el').previousElementSibling.innerText = `Mass (${weightUnits})`;
}
