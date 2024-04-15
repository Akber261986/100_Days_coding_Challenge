"use strict";
let grades = [25, 30, 47, 32];
let avgGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(avgGrade);
