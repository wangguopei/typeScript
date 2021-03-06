"use strict";
let isDone = false;
let decimal = 10;
//TypeScript also uses double quotes (") or single quotes (') to surround string data.
let firstName = "Guopei";
let lastName = "Wang";
/*
You can also use template strings, which can span multiple lines and have embedded expressions.
These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
*/
let address = `
address line 1
address line 2
 `;
let greeting = `${firstName} ${lastName} home is ${address}`;
//console.log(greeting);
//two ways to define array
let listOne = [1, 2, 3];
let listTwo = [1, 2, 3];
//Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
let listThree = ["a", 1, true];
var Colour;
(function (Colour) {
    Colour[Colour["red"] = 0] = "red";
    Colour[Colour["blue"] = 1] = "blue";
    Colour[Colour["green"] = 2] = "green";
})(Colour || (Colour = {}));
let c = Colour.red;
console.log(c); // output is 0, c is acturally enum numbering.  By default, enums begin numbering their members starting at 0
// Good Practice: manually setting the values of its members in case of later change its member order
var AnotherColour;
(function (AnotherColour) {
    AnotherColour[AnotherColour["red"] = 1] = "red";
    AnotherColour[AnotherColour["blue"] = 2] = "blue";
    AnotherColour[AnotherColour["green"] = 3] = "green";
})(AnotherColour || (AnotherColour = {}));
let ac = AnotherColour.red;
console.log(ac);
// from enum number to map to this name
let acName = AnotherColour[2];
console.log(acName); // output is blue
let list = [1, true, "free"];
//# sourceMappingURL=basicTypes.js.map