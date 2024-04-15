function varify(a:boolean, b:boolean){
    if (a && b === true){
        console.log(true);
        
    }
    else {
        console.log(false);
        
    }
}

varify(true , false);
varify(true , true);
varify(false , true);
varify(false , false);

//  Done