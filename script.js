// 1. Setup - Welcome Message
console.log("SpendWise Application Started");

// 2. Store Application Data with variables
let budget = 50000;
let expenses = 15000;

// 3. Collect User Input via prompts
budget = Number(prompt("Enter your total budget (e.g. 50000):", budget));
let foodExpense = Number(prompt("Enter Food Expense:", 5000));
let transportExpense = Number(prompt("Enter Transport Expense:", 7000));
let entertainmentExpense = Number(prompt("Enter Entertainment Expense:", 3000));

// 4. Perform Calculations with Reusable Functions

// Function to calculate total expenses
function calculateTotalExpenses(food, transport, entertainment) {
    return food + transport + entertainment;
}

// Function to calculate remaining balance
function calculateBalance(budget, totalExpenses) {
    return budget - totalExpenses;
}

// Function to check budget status
function getBudgetStatus(balance) {
    if (balance > 0) {
        return "You are within budget!";
    } else if (balance === 0) {
        return "Budget exactly finished.";
    } else {
        return "You have overspent!";
    }
}

// 5. Execute calculations
let totalExpenses = calculateTotalExpenses(foodExpense, transportExpense, entertainmentExpense);
let remainingBalance = calculateBalance(budget, totalExpenses);
let status = getBudgetStatus(remainingBalance);

// 6. Display Results in console and on page
console.log("Budget: " + budget);
console.log("Total Expenses: " + totalExpenses);
console.log("Remaining Balance: " + remainingBalance);
console.log("Status: " + status);

document.getElementById("result").innerHTML = 
    `Budget: ${budget} <br> Total Expenses: ${totalExpenses} <br> Balance: ${remainingBalance} <br> ${status}`;

// Also show alert
alert(`SpendWise Summary:\nBudget: ${budget}\nExpenses: ${totalExpenses}\nBalance: ${remainingBalance}\n${status}`);