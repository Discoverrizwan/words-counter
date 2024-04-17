#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//word counter app
console.log(chalk.yellowBright.bold.italic(`

**********************************************************************************
===================Welcome to words counter APP==================================
**********************************************************************************`));

const answer :{
    Sentence : string
}=await inquirer.prompt([
    {
        name :"Sentence",
        type : "input",
        message : "Enter a sentence to counte the words of sentence"
    }
]);

let word = answer.Sentence.trim().split(" ");
console.log(word);
console.log(chalk.greenBright.italic.bold(`Your sentence words counting is ${word.length}`));

