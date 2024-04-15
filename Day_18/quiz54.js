"use strict";
// a way to make a flexible list function
Object.defineProperty(exports, "__esModule", { value: true });
function createObjectWithDinamicKey(key, value) {
    let dinamicObject = {};
    // setup a section in the list with a change able name
    dinamicObject[key] = value;
    return dinamicObject;
}
// using the flexible list setup for a user's performance
let userPerformance = createObjectWithDinamicKey("theme", "dark");
// showing the user's choice
console.log(userPerformance);
