function colors(){
    let rand = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return rand;
}
let abc = colors();
console.log(`#${abc}`);
