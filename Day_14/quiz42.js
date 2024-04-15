"use strict";
let magicianT = ["Alice", "David", "Chris"];
function show_magicianT(magicianT) {
    magicianT.forEach(magician => {
        console.log(magician);
    });
}
show_magicianT(magicianT);
function make_great(magicianT) {
    for (let i = 0; i < magicianT.length; i++) {
        magicianT[i] = "The great " + magicianT[i];
    }
}
make_great(magicianT);
show_magicianT(magicianT);
