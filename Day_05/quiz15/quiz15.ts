// 15. Changing guest list
import guest from "./quiz14";
import message2 from "./quiz14"

console.log(guest[1]+" can't make dinner.");

guest.splice(1,1) // delet guest name who can't make dinner
console.log(guest)
guest.splice(1,0,'Bisma') // updating new guest
console.log(guest)
console.log("Hello "+guest[0]+" \n"+message2);
console.log("Hello "+guest[1]+" \n"+message2);
console.log("Hello "+guest[2]+" \n"+message2);