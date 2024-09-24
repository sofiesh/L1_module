# My Module
By implementing finCalc.js into your application you will get access to financial calculations support. It is a simple and user-friendly way to calculate key figures such as NPV, IRR and payback period.

## About
The module contains calculations on:

# Average
Run average.add to push numbers to an array then run average.calculate to generate the average of those numbers.

# Net Present Value

validateNetPresentValueInputs(): Takes two arguments, the cashFlow and rate given by the user. If the array is empty or the rate is a non-positive number less than 0 an error will be thrown.

calculateNetPresentValue(): Takes two arguments (cashFlow and rate). The function calculates the Net Present Value (NPV) of a number of cash flows with a rate given by the user.

rankInvestmentsOnNetPresentValue(): Takes one argument, an array of objects which represent different investments with their given cash flows and rates, and ranks the investments based on their Net Present Value in falling order.

# IRR
..

# Payback Period
..



## Test
Manual tests can be run with node.js and are found in /test-app/testInConsole.js
