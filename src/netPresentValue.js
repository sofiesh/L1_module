/**
 * Module for Net Present Value calculations.
 *
 * @author Sofie Swagemakers Herou
 */

/**
 * Function to calculate the Net Present Value of a series of cash flows.
 *
 * @param {Array} cashFlows the cash flows to be considered
 * @param {number} rate the discount rate
 * @returns {string} the Net Present Value as a string with two decimal places
 */
export function calculateNetPresentValue (cashFlows, rate) {
  let npv = 0

  for (let i = 0; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow(1 + rate, i)
  }

  return parseFloat(npv).toFixed(2)
}

/**
 * Function to rank investments based on their Net Present Value.
 */
export function rankInvestmentsOnNetPresentValue () {
  console.log('rankInvestmentsOnNetPresentValue')
}
