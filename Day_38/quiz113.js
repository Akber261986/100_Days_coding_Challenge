const countriestoSearch = new Map();
countriestoSearch.set("USA", "Washington D.C");
countriestoSearch.set("Pakistan", "Islam Abad");
countriestoSearch.set("Japan", "Tokio");
// console.log(countriestoSearch);
function country(key) {
    let a = countriestoSearch.has(key);
    let b = countriestoSearch.get(key);
    return { a, b };
}
console.log(country("Canada"));
// Teacher Code
function logCapitalOfCanada(countriestoSearch) {
    if (countriestoSearch.has("Canada")) {
        console.log(`The of Canada is ${countriestoSearch.get("Canada")}`);
    }
    else {
        console.log(`Canada is not in Map`);
    }
}
logCapitalOfCanada(countriestoSearch);
export {};
