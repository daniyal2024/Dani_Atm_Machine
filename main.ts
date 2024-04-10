#! /usr/bin/env node
import inquirer from 'inquirer';
let mybalance = 0;
const limit = 500000;
let mypin = 2233;
console.log("welcome to code with daniyal - ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
let i = 1;
while (i > 0) {
    if (pinAnswer.pin === mypin) {
        console.log("pin is correct, LOGIN succesfully");
        //    console.log(`current Account balance is ${mybalance}`)
        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "select an operation",
                choices: ["withdraw Amount", "deposit Amount", "check balance", "exit"]
            }
        ]);
        if (operationAns.operation === "exit") {
            console.log("thank you for using our bank");
            break;
        }
        if (operationAns.operation == "withdraw Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > mybalance) {
                console.log("insufficient Balance");
            }
            else {
                mybalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully`);
                console.log(`your remaning balance is: ${mybalance}`);
            }
        }
        if (operationAns.operation == "deposit Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to deposit:"
                }
            ]);
            if (amountAns.amount > limit) {
                console.log("limited amount");
            }
            else {
                mybalance += amountAns.amount;
                console.log(`${amountAns.amount} deposit successfully`);
                console.log(`your new balance is: ${mybalance}`);
            }
        }
        if (operationAns.operation === "check balance") {
            console.log(`your account balance is: ${mybalance}`);
        }
    }
    else {
        console.log("pin is incorrect, try again");
    }
}

}
