/**
 * This file is used to test the functions in the console.
 * It imports the Average class from the finCalc.js file and uses it to calculate the average of a list of numbers.
 */

import { Average, calculateNetPresentValue, rankInvestmentsOnNetPresentValue, calculateInternalRateOfReturn } from '../src/FinCalc.js'
import readline from 'readline'

// Average test
const averageTest = new Average()
averageTest.add(1)
averageTest.add(2)
averageTest.add(3)

// average.calculate() -- Expected output: 2

if (averageTest.calculate() === 2) {
    console.log('Test passed')
} else {
    console.log('Test failed')
}

// NPV -- Expected utput: 529.75
const calculateNPV = calculateNetPresentValue([100, 200, 300], 0.1)

if (parseFloat(calculateNPV) === 529.75) {
    console.log('Test passed')
} else {
    console.log('Test failed')
}

// Try 1: Ranking investments based on NPV
const investments = [
    { name: 'Investment A', cashFlows: [100, 200, 300], rate: 0.1 },
    { name: 'Investment B', cashFlows: [150, 250, 350], rate: 0.08 },
    { name: 'Investment C', cashFlows: [200, 300, 400], rate: 0.12 }
]

const rankedInvestments = rankInvestmentsOnNetPresentValue(investments)

console.log('Ranked investments: ', rankedInvestments)
console.log('Expected output: ')

// // Uncomment to test errorhandling
// // Try 2: Ranking investments based on NPV where one investment has no cash flows
// const investments2 = [
//     { name: 'Investment A', cashFlows: [], rate: 0.1 },
//     { name: 'Investment B', cashFlows: [150, 250, 350], rate: 0.08 },
//     { name: 'Investment C', cashFlows: [200, 300, 400], rate: 0.12 }
// ]

// const rankedInvestments2 = rankInvestmentsOnNetPresentValue(investments2)
// console.log('Ranked investments: ', rankedInvestments2)


// // Test IRR -- Expected output: 0.1
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function testIRRCalculation(cashFlows) {
//     rl.question('Try to guess a rate: ', (inputRate) => {
//         const rate = parseFloat(inputRate)
//         const result = calculateInternalRateOfReturn(cashFlows, rate)

//         if (typeof result === 'string') {
//             console.log(result)
//             testIRRCalculation(cashFlows)
//         } else {
//             console.log('IRR is: ', (result * 100).toFixed(2) + '%', 'npv is: ', calculateNetPresentValue(cashFlows, result))
//             rl.close()

//         }
//     })
// }

// const calculateIRR = testIRRCalculation([-499, 200, 300, 200])

const cashFlows = [-1000, 500, 300, 400];
const irr = calculateInternalRateOfReturn(cashFlows);
console.log(`Calculated IRR: ${irr}`);