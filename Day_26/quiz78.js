"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function declaration(num) {
    return num * num;
}
const expression = function (num2) {
    return num2 * num2;
};
console.log("Calling declaration: ", declaration(4));
console.log("Calling Expression: ", expression(4));
