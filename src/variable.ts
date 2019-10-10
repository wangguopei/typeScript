for (var i = 0; i < 10; i++) {
    // setTimeout(function() { console.log(i); }, 100 * i);
}

for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        // setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}



//Destructuring
console.log("array destructining to replace using index.");
let input = [1, 2];
let [first1, second] = input;
console.log(first1); // outputs 1
console.log(second); // outputs 2

//swap on already defined variables.
[first1, second] = [second, first1];
console.log(first1); // outputs 1
console.log(second); // outputs 2

let [first2, ...rest] = [1, 2, 3, 4];
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [first3] = [1, 2, 3, 4];
console.log(first3); 

let [, second2, , fourth] = [1, 2, 3, 4];
console.log(second2); 


console.log("function destructing");
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);

console.log("Object destructing");
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a);
console.log(b);