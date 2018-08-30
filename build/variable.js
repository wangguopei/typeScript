"use strict";
var _a;
for (var i = 0; i < 10; i++) {
    // setTimeout(function() { console.log(i); }, 100 * i);
}
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function (i) {
        // setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
//Destructuring
console.log("array destructining to replace using index.");
var input = [1, 2];
var first1 = input[0], second = input[1];
console.log(first1); // outputs 1
console.log(second); // outputs 2
//swap on already defined variables.
_a = [second, first1], first1 = _a[0], second = _a[1];
console.log(first1); // outputs 1
console.log(second); // outputs 2
var _b = [1, 2, 3, 4], first2 = _b[0], rest = _b.slice(1);
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var first3 = [1, 2, 3, 4][0];
console.log(first3);
var _c = [1, 2, 3, 4], second2 = _c[1], fourth = _c[3];
console.log(second2);
console.log("function destructing");
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]);
console.log("Object destructing");
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a);
console.log(b);
