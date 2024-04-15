"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 22. International Error:
const quiz20_1 = __importDefault(require("./quiz20"));
quiz20_1.default[8] = 'India'; // adding index 8 to making an error.
console.log(quiz20_1.default[7]); // if i call index 7 it will show me an error.
quiz20_1.default.splice(5, 4); // correct the error:
console.log(quiz20_1.default);
