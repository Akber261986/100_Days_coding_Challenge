"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uperLower(str2) {
    let upper = str2.toUpperCase();
    let lower = str2.toLowerCase();
    console.log("Upper case: ", upper);
    console.log("Lower case: ", lower);
    return { upper, lower };
}
uperLower("Akber");
