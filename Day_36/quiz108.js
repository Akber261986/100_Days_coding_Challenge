"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let iscompareString = (str1, str2) => {
    return (str1.toLowerCase() === str2.toLowerCase());
};
console.log(iscompareString("Clasic", "clasic"));
console.log(iscompareString("game", "Gaming"));
