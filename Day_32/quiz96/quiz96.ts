let numarr: number[] = [11, 5, 15, 6, 9, 70];

const sumOfAll = () => {
    return numarr.reduce((acumulator,current) => acumulator + current, 0); 
}
let sum = sumOfAll();
console.log(sum);
