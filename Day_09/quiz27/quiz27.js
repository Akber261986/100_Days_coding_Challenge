"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 27. aliens color 3.
const quiz26_1 = __importDefault(require("./quiz26"));
if (quiz26_1.default === 'Green') {
    console.log("You just earned 5 points");
}
else if (quiz26_1.default === 'Yellow') {
    console.log("You just earned 10 points");
}
else if (quiz26_1.default === 'red') {
    console.log("You just earned 15 points");
}
