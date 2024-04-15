let mixArry: any [] = [23, "mango", 66, "grapes", "lemon", 67];

let strArry: string[] = mixArry.filter(item => typeof item === "string");
console.log(strArry)