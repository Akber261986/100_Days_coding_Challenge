"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 16. More guest:
const quiz14_1 = __importDefault(require("./quiz14"));
console.log("We found a bigger dinner Table, so we are going to invite three more guests");
quiz14_1.default.unshift('Irfan');
quiz14_1.default.splice(2, 0, 'Karim');
quiz14_1.default.push('Salma'); // Sorry i have no idea how to use append.
console.log(quiz14_1.default);
