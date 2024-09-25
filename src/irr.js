/**
 * Module for Internal Rate of Return calculations.
 *
 * @author Sofie Swagemakers Herou
 */

import { calculateNetPresentValue } from './netPresentValue.js'

/**
 * Function to adjust the rate based on the current NPV value.
 *
 * @param {number} currentRate The current guess for the rate.
 * @param {number} npv The calculated NPV for the current rate.
 * @param {number} adjustmentFactor The adjustment step size.
 * @returns {number} The adjusted rate.
 */
function guessRate(currentRate, npv, adjustmentFactor = 0.01) {
    if (npv > 0) {
        return (currentRate + adjustmentFactor) / 2
    } else {
        return (currentRate + adjustmentFactor) / 2
    }
}

/**
 * Function to calculate the Internal Rate of Return of a series of cash flows.
 * If the calculation does not converge, the user is asked to provide a different rate and thereafter retries.
 *
 * @param {Array} cashFlows The cash flows to be considered.
 * @param {number} [initialRate=0.1] The initial guess for the discount rate (default 10%).
 * @param {number} [tolerance=0.001] The tolerance for the convergence of the calculation (default 0.0001).
 * @param {number} [maxIterations=1000] The maximum number of iterations before the calculation is aborted (default 1000).
 * @returns {number|string} The calculated Internal Rate of Return, or a message if it does not converge.
 */
export function calculateInternalRateOfReturn(cashFlows, initialRate = 0.1, tolerance = 0.001, maxIterations = 1000) {
    let lowerBound = 0.0
    let upperBound = 1.0 
    let rate = initialRate
    let npv = calculateNetPresentValue(cashFlows, rate)
    let iteration = 0
    // let adjustmentFactor = 0.01

    // Loop until the NPV is within the tolerance or the maximum number of iterations is reached.
    while (Math.abs(npv) > tolerance && iteration < maxIterations) {
        rate = guessRate(lowerBound, upperBound, npv, rate)
        npv = calculateNetPresentValue(cashFlows, rate)
        iteration++

        // Preventing infinite loop
        if (iteration === maxIterations) {
            const suggestionForNextRateGuess = npv > 0 ? 'higher' : 'lower'
            return 'Calculation did not converge. NPV is ' + npv + '. Please try a ' + suggestionForNextRateGuess + ' rate.'
        }
    }

    return rate
}
