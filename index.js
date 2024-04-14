#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1 - 6",
    }
]);
if (answer.userguessnumber === randomnumber) {
    console.log("congtratulations");
}
else {
    console.log("wrong number");
}
