"use strict";
let price = [1200, 1500, 2000];
let price2 = [1000, 1600, 1800];
let combinePrice = [...price, ...price2].sort((p, q) => p - q);
console.log(combinePrice);
