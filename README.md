# My Module
By implementing finCalc.js into your application you will get access to financial calculations support. It is a simple and user-friendly way to implement calculations in your console or client application.

# About finCalc
The module contains calculations on:

## Average
Run average.add to push numbers to an array then run average.calculate to generate the average of those numbers.

## Calculate Savings
This module helps with validating user input and calculate how much the user must save each month in order to reach their savings goal.

### Functions
validateSavingsInput(): Takes 4 arguments, userName, savingsGoal, currentSavings, and monthsToReachGoals. Error is thrown if the arguments do not follow the requirements.

calculateSavings(): Takes 4 arguments, userName, savingsGoal, currentSavings, and monthsToReachGoal. It runs the validateSavingsInput function before calculating the necessary savings per month and returns the savings per month amount.

## Create Budget
This module helps with validating user input and performing calculations when creating a budget for the user. 

### Functions
validateBudgetInput(): Takes three arguments, userName, monthlyIncome and monthlyExpenses. Throws error if the arguments do not follow the requirements.

createBudget(): Takes three arguments, userName, monthlyIncome and monthlyExpenses. It runs the validateBudgetInput function before performing calculations, and returns an object with the user's budget data in order to enable use of those for other parts of the module.

## Net Present Value
"Net present value (NPV) is the difference between the present value of cash inflows and the present value of cash outflows over a period of time. NPV is used in capital budgeting and investment planning to analyze a project's projected profitability." Source: https://www.investopedia.com/terms/n/npv.asp

### Functions
validateNetPresentValueInputs(): Takes two arguments, the cashFlow and rate given by the user. If the array is empty or the rate is a non-positive number less than 0 an error will be thrown.

calculateNetPresentValue(): Takes two arguments (cashFlow and rate). The function calculates the Net Present Value (NPV) of a number of cash flows with a rate given by the user.

rankInvestmentsOnNetPresentValue(): Takes one argument, an array of objects which represent different investments with their given cash flows and rates, and ranks the investments based on their Net Present Value in falling order.

## Rent or Buy
Supports decision to rent or buy a certain product.

### Functions
rentOrBuy(): Takes 3 arguments, priceToBuy, priceToRentPerMonth, and lengthOfPeriodMonths, in order to create an object with parameters to compare the costs of renting and buying.

# Tests
A test library for manual exists in the directory test-app.
* Tests can be run in the terminal using commmand `npm test`. Those are found in /test-app/testInConsole.js. 
* Tests for the client use are only to visualize what can be tested and how but do not test the library completely. You find the client environment set up in /test-app/testApp.js and /test-app/index.html.

