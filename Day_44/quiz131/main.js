"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
var student = /** @class */ (function () {
    function student(name, age) {
        this.name = name;
        this.age = age;
    }
    student.prototype.akbar = function () {
        console.log("My Name is ".concat(this.name, " and i am only ").concat(this.age));
    };
    return student;
}());
exports.student = student;
var add = new student("aini", 6);
add.akbar();
