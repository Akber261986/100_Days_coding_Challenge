let fruites: string[] = ["Mango", "Apple", "Banana", "Cherry"]
console.log(`Original Arry: ${fruites}`);
function removeItem(){
    return fruites.pop()
}
let a = removeItem()
console.log(`Removed Item: ${a}`);
console.log(`Remaining Item: ${fruites}`);

