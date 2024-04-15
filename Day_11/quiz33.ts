let myNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]   // Made by me
console.log(`My output`);


for (let i =0; i <9; i++){
    if (i == 0){
        console.log(`${myNumber[i]}st`);
        
    }
    else if (i == 1){
        console.log(`${myNumber[i]}nd`);
        
    }
    else if (i == 2){
        console.log(`${myNumber[i]}rd`);
        
    }
    else {
        console.log(`${myNumber[i]}th`);
        
    }
}

// Then teacher teaches
console.log(`Teacher's output`);

let teacherNumbers: number []= [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

teacherNumbers.forEach(teacherNumbers => {
    let suffex = "th";
    if (teacherNumbers == 1){
        suffex = "st"
    }
    else if (teacherNumbers == 2){
        suffex = "nd"
    }
    else if (teacherNumbers == 3){
        suffex = "rd"
    }
    console.log(`${teacherNumbers}${suffex}`);
    
});