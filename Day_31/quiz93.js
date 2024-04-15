let fruite = ["Mango", "Apple", "Banana", "Cherry"];
console.log(`Orignal Arry: ${fruite}`);
let index = fruite.indexOf("Banana");
console.log(`Index of Banana: ${index}`);
if (index !== -1)
    fruite[index] = "Grapes";
console.log(`After Replace "Banana" to "Grapes": ${fruite}`);
export {};
