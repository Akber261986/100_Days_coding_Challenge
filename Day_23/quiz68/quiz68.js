"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decimal(a, b) {
    return Math.round((a * b) * 100) / 100;
}
let product = decimal(3.56767, 8.98765);
console.log(product);
