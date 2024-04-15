let magician:string [] = ['magician1', 'magician2','magician3','magician4'];

function show_magician(a:string){
    return console.log(a);
    
}
show_magician((magician[0]))
show_magician((magician[1]))
show_magician((magician[2]))
show_magician((magician[3]))

        // Teachr's Solution
let magicianT:string[] = ["Alice", "David", "Chris"];

function show_magicianT (magicianT:string[]){
    magicianT.forEach(magician => {
        console.log(magician);
        
    });
}
show_magicianT(magicianT)

export default show_magicianT