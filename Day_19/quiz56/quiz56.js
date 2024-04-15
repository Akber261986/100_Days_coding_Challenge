"use strict";
let mixArry = [23, "mango", 66, "grapes", "lemon", 67];
let strArry = mixArry.filter(item => typeof item === "string");
console.log(strArry);
