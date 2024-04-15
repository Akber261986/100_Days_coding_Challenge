function evaluteGrade(grade:string){

    switch (grade) {

        case "A":
            console.log("Exelent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Need Improve");
            break;
        case "D":
            console.log("Poor");
            break;
        case "E":
            console.log("Bad");
            break;
        default:
            console.log("Invalid Grade");
            
            
    }
}
evaluteGrade("B")
evaluteGrade("G")   // Default case will implement