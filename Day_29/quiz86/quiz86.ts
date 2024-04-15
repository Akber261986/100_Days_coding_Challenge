function checkingText(a: string): boolean{
    return a.includes("JavaScript")

}
let str = checkingText("Now i dont code in JavaScript now i code in TypeScript.");
let str2 = checkingText("Now i code in TypeScript only.");

console.log(str);  // This become True
console.log(str2);  // This become false
