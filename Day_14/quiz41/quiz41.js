"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['magician1', 'magician2', 'magician3', 'magician4'];
function show_magician(a) {
    return console.log(a);
}
show_magician((magician[0]));
show_magician((magician[1]));
show_magician((magician[2]));
show_magician((magician[3]));
// Teachr's Solution
let magicianT = ["Alice", "David", "Chris"];
function show_magicianT(magicianT) {
    magicianT.forEach(magician => {
        console.log(magician);
    });
}
show_magicianT(magicianT);
exports.default = show_magicianT;
