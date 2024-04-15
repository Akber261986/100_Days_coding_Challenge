"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let car = {
    make: "toyota",
    model: "corola",
    year: "2020"
};
car.year = "2021";
// car.color = "blue";       // I don't know why new propert is not being added
console.log(car);
