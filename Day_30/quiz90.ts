function checkingValue(val:any):boolean {
    return isNaN(val);
}
let num1 = checkingValue("Hello");
let num2 = checkingValue(25);
console.log(num1);
console.log(num2);
