"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function divideAndRemainder(a, b) {
    let quotient = Math.floor(a / b);
    let remainder = (a % b);
    return { quotient, remainder };
}
console.log(divideAndRemainder(25, 4));
// console.log(product);
