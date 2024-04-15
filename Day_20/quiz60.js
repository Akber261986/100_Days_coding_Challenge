let userInfo = (function () {
    let name = "Akber";
    let age = 36;
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
userInfo.displayInfo();
let a = "Akber";
let b = 36;
console.log(`Name: ${a}, Age: ${b}`);
export {};
