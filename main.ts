#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000; //dollar
let myPin = 1314;

let PinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "please enter your pin",
            type: "number"
        }
    ]);

    if (PinAnswer.pin === myPin) {
        console.log("Correct pin code!!!")
    }
else  {
    console.log("incorrect pin code");
}
 
let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
}
    ]
    );
    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
            );
            myBalance -= amountAns.amount;

            console.log("your remaining balance is: " + myBalance)

            } else if (operationAns.operation === "check balance") {
            console.log("your balance is: " + myBalance)
        } else if (operationAns.operation === "fast cash"){
            let amountAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "select a amount",
                        type: "list",
                        choices:["1000", "3000", "5000"]

                    }])
        }




            
















