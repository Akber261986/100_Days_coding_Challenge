"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ifStaement = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours <= 12) {
        console.log("Good Morning");
    }
    else {
        console.log("Good Evening");
    }
};
ifStaement();
