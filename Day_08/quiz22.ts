// 22. International Error:
import countries from "./quiz20";
countries[8] = 'India';   // adding index 8 to making an error.
console.log(countries[7]); // if i call index 7 it will show me an error.

countries.splice(5,4); // correct the error:
console.log(countries);
