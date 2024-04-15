let movies = ["After Earth", "Iam The Legend", "Gravity", "Martian", "Passenger"];
movies.forEach(element => {
    console.log(element);
});
// Teacher Code
for await (const movie of movies) {
    console.log(movie); // log Each Movie Name
}
export {};
