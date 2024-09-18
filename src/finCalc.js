/**
 * Main JS file for the module.
 */

import { Average } from './average.js'
import { calculateNetPresentValue, rankInvestmentsOnNetPresentValue } from './netPresentValue.js'

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

rankInvestmentsOnNetPresentValue()
