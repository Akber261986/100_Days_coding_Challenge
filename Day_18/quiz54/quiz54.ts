// a way to make a flexible list function

function createObjectWithDinamicKey(key:string, value:string){
        let dinamicObject: any = {};
        // setup a section in the list with a change able name
        dinamicObject [key] = value;
        return dinamicObject;
}
// using the flexible list setup for a user's performance

let userPerformance = createObjectWithDinamicKey("theme", "dark");

// showing the user's choice

console.log(userPerformance);
