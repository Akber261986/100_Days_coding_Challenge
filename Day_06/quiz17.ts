// 17. shrink guests:
import guest from "./quiz14";

console.log("you can invite only two guests");
console.log("sorry "+guest[5]+" I can't invite you to dinner.");
guest.pop();
console.log("sorry "+guest[4]+" I can't invite you to dinner.");
guest.pop();
console.log("sorry "+guest[3]+" I can't invite you to dinner.");
guest.pop();
console.log("sorry "+guest[2]+" I can't invite you to dinner.");
guest.pop();
console.log(guest[0]+" you are still invited to dinner.");
console.log(guest[1]+" you are still invited to dinner.");
guest.pop();
guest.pop();
console.log(guest); // empty list

export default guest