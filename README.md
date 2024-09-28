# My Module
By implementing finCalc.js into your application you will get access to financial calculations support. It is a simple and user-friendly way to calculate key figures such as NPV, IRR and payback period.

# About finCalc
The module contains calculations on:

## Average
Run average.add to push numbers to an array then run average.calculate to generate the average of those numbers.

## Create Budget
This module helps with validating user input and performing calculations when creating a budget for the user. 

### Functions
validateBudgetInput(): Takes three arguments, userName, monthlyIncome and monthlyExpenses. Throws error if the arguments do not follow the requirements.

createBudget(): Takes three arguments, userName, monthlyIncome and monthlyExpenses. It runs the validateBudgetInput function before performing calculations, and returns an object with the user's budget data in order to enable use of those for other parts of the module.

## Calculate Savings
..

## Net Present Value
"Net present value (NPV) is the difference between the present value of cash inflows and the present value of cash outflows over a period of time. NPV is used in capital budgeting and investment planning to analyze a project's projected profitability." Source: https://www.investopedia.com/terms/n/npv.asp

### Functions
validateNetPresentValueInputs(): Takes two arguments, the cashFlow and rate given by the user. If the array is empty or the rate is a non-positive number less than 0 an error will be thrown.

calculateNetPresentValue(): Takes two arguments (cashFlow and rate). The function calculates the Net Present Value (NPV) of a number of cash flows with a rate given by the user.

rankInvestmentsOnNetPresentValue(): Takes one argument, an array of objects which represent different investments with their given cash flows and rates, and ranks the investments based on their Net Present Value in falling order.

## IRR
"IRR, or internal rate of return, is a metric used in financial analysis to estimate the profitability of potential investments. IRR is a discount rate that makes the net present value (NPV) of all cash flows equal to zero in a discounted cash flow analysis." Source: https://www.investopedia.com/terms/i/irr.asp 

### Functions 
guessRate(): Takes three arguments, currentRate, npv and adjustmentFactor, where the adjustment factor is how much the system should change the guess if the previous guess was wrong.

calculateInternalRateOfReturn(): Takes 4 arguments, cashFlows initialRate to start trying from, tolerance for the convergence and maxIterations in order to prevent infinite loops.


## Payback Period
..

# Tests
A test library for manual exists in the directory test-app.
* Tests can be run in the terminal using commmand `npm test`. Those are found in /test-app/testInConsole.js. 
* Tests for the client use /test-app/testApp.js and by updating the /test-app/index.html.
