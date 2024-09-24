/**
 * Module for Internal Rate of Return calculations.
 *
 * @author Sofie Swagemakers Herou
 */

import { calculateNetPresentValue } from './netPresentValue.js'

/**
 * Function to calculate the Internal Rate of Return of a series of cash flows.
 * If the calculation does not converge, the user is asked to provide a different rate and thereafter retries.
 *
 * @param {Array} cashFlows The cash flows to be considered.
 * @param {number} [initialRate=0.1] The initial guess for the discount rate (default 10%).
 * @param {number} [tolerance=0.01] The tolerance for the convergence of the calculation (default 0.0001).
 * @param {number} [maxIterations=1000] The maximum number of iterations before the calculation is aborted (default 1000).
 * @returns {number|string} The calculated Internal Rate of Return, or a message if it does not converge.
 */
export function calculateInternalRateOfReturn(cashFlows, initialRate = 0.1, tolerance = 0.01, maxIterations = 1000) {
    let rate = initialRate
    let npv = calculateNetPresentValue(cashFlows, rate)
    let iteration = 0

    while (Math.abs(npv) > tolerance && iteration < maxIterations) {
        rate += 0.0001
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
