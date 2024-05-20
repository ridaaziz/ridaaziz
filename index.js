import inquirer from "inquirer";
let myBalance = 5000;
let myPine = 1234;
console.log("welcome to code with Rida = ATM Machine");
let PinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    }
]);
if (PinAns.pin === myPine) {
    console.log("Pin is Correct, Login Successfully!");
    // console.log(`Correct Account Balance is ${myBalance}`)  
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["Withdrow Amount", "check Balance"]
        }
    ]);
    if ("operationAns.operation === 'withdrow Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdrow:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(` ${amountAns.amount} withdrow successfully`);
            console.log(`your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your acount Balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is correc");
}
