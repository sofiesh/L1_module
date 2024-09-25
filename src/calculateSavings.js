/**
 * A Module to calculate the savings required in order to reach a certain goal.
 */

/**
 * Function to calculate the savings required to reach a goal.
 * 
 * @param {number} goal The goal amount to reach.
 * @param {number} currentSavings The current savings amount.
 * @param {number} months The number of months to reach the goal.
 * @returns {number} The amount that needs to be saved each month.
 */
export function calculateSavings(goal, currentSavings, months) {
    if (goal <= 0) {
        throw new Error('Goal must be greater than 0')
    }

    if (currentSavings < 0) {
        throw new Error('Current savings must be greater than or equal to 0')
    }

    if (months <= 0) {
        throw new Error('Months must be greater than 0')
    }
    
    return (goal - currentSavings) / months
}