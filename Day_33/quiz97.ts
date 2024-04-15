let date1 = new Date();

let day1 = date1.getDate();
let month1 = date1.getMonth();
let year1 = date1.getFullYear();

function currentdate(day2:number, month2:number,year2:number){
    return (`${day2}-${month2}-${year2}`)

}
let today = currentdate(day1, month1, year1);

console.log(today);

            // Teacher code

function getCurrentDateformated():string{
        const now = new Date;
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        return (`${day}-${month}-${year}`)
}
console.log(getCurrentDateformated());

