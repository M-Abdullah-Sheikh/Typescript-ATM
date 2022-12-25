#! /usr/bin/env node

import chalk from "chalk";

import inquirer from "inquirer";

(

    async () => {
        console.log(chalk.red("Welcome to Basic ATM"));
        const usersInput: { userId: string, userPin: string } = await inquirer.prompt([
            {
                name: "userId",
                message: "Enter Your User ID",
                type: "input"
            },
            {
                name: "userPin",
                message: "Enter Your Pin Number",
                type: "password"
            }
        ])

        const userData = {
            userId: usersInput.userId,
            userPin: usersInput.userPin,
            amount: Math.floor(Math.random() * 100000 + 1)
        }
        console.log(chalk.red("Hey", usersInput.userId, "How May I Help You..!"));
        const selectoption: { options: "Cash withdrawl" | "Exit" } = await inquirer.prompt([
            {
                name: "options",
                message: "Select Any Options",
                type: "list",
                choices: ["Cash withdrawl", "Exit"],
            },
        ])

        if (selectoption.options === "Cash withdrawl") {
            console.log(chalk.blueBright("Your Current Amount: ", userData.amount));
            const enterAmount: { amount: number } = await inquirer.prompt([
                {
                    message: "Enter Your Amount",
                    name: "amount",
                    type: "number",
                    validate: (input) => {
                        if (input > userData.amount) {
                            return "insufficient Balance"
                        } else {
                            return true
                        }
                    }
                }
            ])

            userData.amount -= enterAmount.amount

            console.log(chalk.blueBright("Amount after withdrawl: ", userData.amount));
  
        }
    }
)

    ();