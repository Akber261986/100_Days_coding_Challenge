function divideAndRemainder(a:number, b:number):
{quotient: Number, remainder: number}{
    let quotient = Math.floor(a / b);
    let remainder = (a % b);
    return {quotient , remainder}
}
console.log(divideAndRemainder(25,4));

