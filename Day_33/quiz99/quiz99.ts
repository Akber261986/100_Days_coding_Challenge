function getnextbirtday(month:number, day:number): Date{
        const today = new Date();
        let year = today.getFullYear();
        const birtday = new Date(year, month-1, day);
            if (birtday < today){
                birtday.setFullYear(year+1)
            }
            return birtday;
}
const nextbd = getnextbirtday(10, 26);
console.log(`next bd : ${nextbd.toLocaleDateString()}`);
