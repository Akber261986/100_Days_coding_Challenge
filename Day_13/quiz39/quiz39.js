"use strict";
function city_country(city, country) {
    return (city + "," + country);
}
let d = city_country("karachi", "Pakistan");
console.log(`"${d}"`);
let e = city_country("yasrab", "Saudi Arab");
console.log(`"${e}"`);
let f = city_country("Kabul", "Afganistan");
console.log(`"${f}"`);
// Teacher did
function city_countryT(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("lahore", "Pakistan"));
console.log(city_country("Tokio", "Japan"));
console.log(city_country("Paris", "France"));
