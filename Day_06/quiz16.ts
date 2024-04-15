// 16. More guest:
import guest from "./quiz14";

console.log("We found a bigger dinner Table, so we are going to invite three more guests");
guest.unshift('Irfan');
guest.splice(2,0,'Karim');
guest.push('Salma');    // Sorry i have no idea how to use append.
console.log(guest);
