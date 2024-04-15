function declaration (num: number){             // This is a declaration function
    return num * num;
}

const expression = function(num2:number){          // This is a expression function
    return num2 * num2
}

console.log("Calling declaration: ", declaration(4));
console.log("Calling Expression: ", expression(4));
