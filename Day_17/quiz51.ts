let x = 3;
let y = 4;

function area (a:number, b:number){
    return (a * b)
}
let rectangleArea = area(x,y)
console.log(`The area of Rectangle is: ${rectangleArea} squire`);

        // refectoring to Arrow funtion

        let area2 = ()=> x*y
let rectangleArea2 = area2()
console.log(`The area of Rectangle is: ${rectangleArea2} squire`);


            // teacher code

// Orignal function for calculating The area of rectangle

function calculateArea (width: number, height: number): number {
    return width*height;
}
 
// refectored into an arrow function

let calculateAreaArrow = (width: number, height: number): number =>
        width*height;

        // Example usage of arrow function

console.log(calculateArea(5,7));
