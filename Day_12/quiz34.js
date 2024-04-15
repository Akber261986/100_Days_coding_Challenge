"use strict";
let pizza = ["Pepperoni pizza", "Macroni pizza", "Chicken pizza"];
pizza.forEach(pizza => {
    console.log(pizza); // Printing just names
});
pizza.forEach(pizza => {
    console.log(`I realy like ${pizza}`); // updated output sentance with name
});
console.log(`I realy love pizza`); // final statement
