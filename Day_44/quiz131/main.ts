export class student{
    name: string
    age: number
    constructor (name:string, age:number){
        this.name = name
        this.age = age
    }
    newMethod(){
        console.log(`My Name is ${this.name} and i am only ${this.age}`);
        
    }
}
const add = new student("aini", 6);
add.newMethod();