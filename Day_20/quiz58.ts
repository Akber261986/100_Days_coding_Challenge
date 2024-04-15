function avgScore (...score:number[]):number{
    let total = score.reduce((sum, score)=> sum + score, 0);
    return total/ score.length
}

console.log(avgScore(80, 90, 100, 70));
