"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 15. Changing guest list
const quiz14_1 = __importDefault(require("./quiz14"));
const quiz14_2 = __importDefault(require("./quiz14"));
console.log(quiz14_1.default[1] + " can't make dinner.");
quiz14_1.default.splice(1, 1); // delet guest name who can't make dinner
console.log(quiz14_1.default);
quiz14_1.default.splice(1, 0, 'Bisma'); // updating new guest
console.log(quiz14_1.default);
console.log("Hello " + quiz14_1.default[0] + " \n" + quiz14_2.default);
console.log("Hello " + quiz14_1.default[1] + " \n" + quiz14_2.default);
console.log("Hello " + quiz14_1.default[2] + " \n" + quiz14_2.default);
