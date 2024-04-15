let magicianT:string[] = ["Alice", "David", "Chris"];

function show_magicianT (magicianT:string[]){
    magicianT.forEach(magician => {
        console.log(magician);
        
    });
}
show_magicianT(magicianT)

function make_great (magicianT:string []){
    for (let i =0; i< magicianT.length; i++){
        magicianT [i] = "The great " + magicianT [i]
    }
}

make_great (magicianT);
show_magicianT (magicianT);