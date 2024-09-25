/**
 * A module to create and handle a personal budgets.
 */

/**
 * Function to create a budget object based on user input in an application.
 *
 * @param {string} name 
 * @param {number} income 
 * @param {object} expenses 
 * @returns {object} An object representing a summary of the budget.
 */
export function createBudget (name, income, expenses) {
  return {
    name,
    income,
    expenses,
    balance: income - expenses
  }
}