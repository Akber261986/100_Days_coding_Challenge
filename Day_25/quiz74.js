"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p = 5;
let q = 10;
console.log(p);
console.log(q);
let r = p;
let s = q;
q = r;
p = s;
console.log(p);
console.log(q);
// Genuine methode to swap a value
let a = 5, b = 10;
console.log("a is = ", a, "b is = ", b);
let temp = a;
a = b;
b = temp;
console.log("After Swap: a = ", a, "b is = ", b);
