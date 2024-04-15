import inquirer from "inquirer";
function makeAddres(valuToAdd) {
    return function (number) {
        return number + valuToAdd;
    };
}
let addFive = makeAddres(5);
let user = await inquirer.prompt({
    name: "num",
    type: "number",
    message: "Enter a number"
});
console.log(addFive(user.num));
