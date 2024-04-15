"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let leapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(`${year} is a leap Year`);
    }
    else {
        console.log(`${year} is Not a leap Year`);
    }
};
leapYear(2024);
leapYear(1800);
