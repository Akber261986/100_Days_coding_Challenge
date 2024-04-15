let gradeFunc = (marks:number) => {
    if (marks >= 70 && marks<=100 ){
        
        console.log(`You Got grade "A"`);
    }
    else if (marks <70 && marks >=60){
        
        console.log(`You Got grade "B"`);
    }
    else if (marks <60 && marks >=50){
        
        console.log(`You Got grade "C"`);
    }
    else if (marks <50 && marks >=40){
        
        console.log(`You Got grade "D"`);
    }
    else if (marks <40 && marks >=0){
        
        console.log(`You Got grade "F"`);
    }
    else {
        console.log(`Invalid Input! Please Enter Valid Marks`);
        
    }
}
gradeFunc(62);
gradeFunc(42);
gradeFunc(22);
gradeFunc(87);
gradeFunc(56);
gradeFunc(125);