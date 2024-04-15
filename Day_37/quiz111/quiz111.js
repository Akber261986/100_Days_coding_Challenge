"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let agediff = (age) => {
    if (age < 13 && age >= 0) {
        console.log(`You are a Child.`);
    }
    else if (age >= 13 && age <= 19) {
        console.log(`You are a Teenager`);
    }
    else {
        console.log(`You are an Adult`);
    }
};
agediff(15);
agediff(7);
agediff(37);
