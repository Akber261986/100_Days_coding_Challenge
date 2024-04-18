let multiple = (...value:number[] ) => 
    value.reduce((a,b) => a * b, 1);

console.log(multiple(5, 9, 3));
