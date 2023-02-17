#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    const rainbTitle = chalkAnimation.rainbow(`------Let's start program------`);
    await sleep();
    rainbTitle.stop();
}
welcome();
async function askQuestion() {
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.rgb(187, 143, 206)(`Please enter the paragraph you want to convert: `)
        }
    ]);
    const word_array = que.str.split(" ");
    //console.log(word_array);
    console.log(`Words in paragraph: ${word_array.length}`);
    const char_without_spaces = que.str.replace(/ /g, "");
    //console.log(char_without_spaces);
    console.log(`Characters in paragraph: ${char_without_spaces.length}`);
}
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var playAgain = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.rgb(187, 143, 206)(`Do you want to start again? Press Y or N: `)
            }
        ]);
    } while (playAgain.restart === "y" || playAgain.restart === "yes" || playAgain.restart === "Y" || playAgain.restart === "YES");
}
;
startAgain();
