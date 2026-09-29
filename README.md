# SpendWise - Personal Budget Tracker

SpendWise is a simple personal budget management application that helps users track their expenses and stay within budget.

## Features
- Collects user budget via prompts
- Tracks Food, Transport, and Entertainment expenses
- Calculates total expenses and remaining balance
- Checks budget status (within budget, exactly on budget, or over budget)
- Stores data with variables
- Uses reusable functions

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## How It Works
1.  **Store Data:** `budget` and `expenses` variables
2.  **User Input:** Uses `prompt()` to get total budget and expenses
3.  **Calculations:**
    - `calculateTotalExpenses(food, transport, entertainment)`
    - `calculateBalance(budget, totalExpenses)`
    - `getBudgetStatus(balance)`
4.  **Output:** Displays results via `console.log()` and `alert()`

## How to Run
1. Clone the repo: `git clone https://github.com/sacdhiyaaden-crypto/pywk5.git`
2. Open `index.html` in your browser
3. Open browser console (F12)
4. Enter your budget and expenses when prompted

## Author
Sacdiya Aden - PLP Student

## License
MIT