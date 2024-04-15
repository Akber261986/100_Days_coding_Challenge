"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 17. shrink guests:
const quiz14_1 = __importDefault(require("./quiz14"));
console.log("you can invite only two guests");
console.log("sorry " + quiz14_1.default[5] + " I can't invite you to dinner.");
quiz14_1.default.pop();
console.log("sorry " + quiz14_1.default[4] + " I can't invite you to dinner.");
quiz14_1.default.pop();
console.log("sorry " + quiz14_1.default[3] + " I can't invite you to dinner.");
quiz14_1.default.pop();
console.log("sorry " + quiz14_1.default[2] + " I can't invite you to dinner.");
quiz14_1.default.pop();
console.log(quiz14_1.default[0] + " you are still invited to dinner.");
console.log(quiz14_1.default[1] + " you are still invited to dinner.");
quiz14_1.default.pop();
quiz14_1.default.pop();
console.log(quiz14_1.default); // empty list
exports.default = quiz14_1.default;
