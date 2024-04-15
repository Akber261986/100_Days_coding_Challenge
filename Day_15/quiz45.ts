function make_car (manufacturer:string, model:string, ...options:[string, any][]): Object {
    let car:any ={ manufacturer, model};
    options.forEach(([key , value]) => 
car[key] = value);
    return car
}
console.log(make_car("Toyota", "Corola", ["color", "red"], ["year", "2022"]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["year", "2010"]));
