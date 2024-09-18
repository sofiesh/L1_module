/**
 * Module for Net Present Value calculations.
 * 
 * @author Sofie Swagemakers Herou
 */

/**
 * Function to calculate the Net Present Value of a series of cash flows.
 * 
 * @param {*} cashFlows 
 * @param {*} rate 
 * @returns 
 */
export function calculateNetPresentValue(cashFlows, rate) {
    let npv = 0

    for (let i = 0; i < cashFlows.length; i++) {
        npv += cashFlows[i] / Math.pow(1 + rate, i)
    }

    return parseFloat(npv).toFixed(2)
}

export function rankInvestmentsOnNetPresentValue() {
    console.log('rankInvestmentsOnNetPresentValue')
}