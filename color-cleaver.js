const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

const color1 = getInput(1);
const color2 = getInput(2);

if (color1 === undefined && color2 === undefined) {
    console.log('Non colors provided. Error.');
}

else if (color1 !== undefined && color2 === undefined) {
    const isColorValid = isValidSecondary(color1);
    if (isColorValid) {
        const deconstruction = colorDeconstructor(color1);
        console.log('Deconstruction is', deconstruction);
    } else {
        console.log('Color 1 is not a valid secondary color');
    }

}

else {
    //
    const isColor1Valid = isValidPrimary(color2);
    const isColor2Valid = isValidPrimary(color2);
    if (isColor1Valid && isColor2Valid) {
        const combination = colorCombinator(color1, color2);
        console.log('Combination is', combination);
    } else {
        console.log('At least one color is not a valid primary color.');
    }    
}


