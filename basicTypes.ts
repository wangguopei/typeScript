let isDone: boolean = false;
let decimal: number = 10;

//TypeScript also uses double quotes (") or single quotes (') to surround string data.
let firstName: string = "Guopei";
let lastName: string = "Wang";

/*
You can also use template strings, which can span multiple lines and have embedded expressions. 
These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
*/
let address: string = `
address line 1
address line 2
 `;

let greeting: string = `${firstName} ${lastName} home is ${address}`;

//console.log(greeting);

//two ways to define array
let listOne: number[] = [1, 2, 3];
let listTwo: Array<number> = [1, 2, 3];

//Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
let listThree: [string, number, boolean] = ["a", 1, true];

enum Colour {
  red,
  blue,
  green
}
let c: Colour = Colour.red;
console.log(c); // output is 0, c is acturally enum numbering.  By default, enums begin numbering their members starting at 0

// Good Practice: manually setting the values of its members in case of later change its member order
enum AnotherColour {
  red = 1,
  blue = 2,
  green = 3
}
let ac: AnotherColour = AnotherColour.red;
console.log(ac);

// from enum number to map to this name
let acName: string = AnotherColour[2];
console.log(acName ); // output is blue

let list: any[] = [1, true, "free"];
