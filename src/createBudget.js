/**
 * A module to create and handle a personal budgets.
 */

/**
 * Function to validate the user's input data.
 *
 * @param {string} userName - The name of the user
 * @param {number} monthlyIncome - The monthly income of the user
 * @param {object} monthlyExpenses - The monthly expenses of the user
 * @throws {Error} Will throw error if the input data is invalid.
 */
export function validateBudgetInput (userName, monthlyIncome, monthlyExpenses) {
  if (!userName) {
    throw new Error('A user name must be provided.')
  }

  if (!monthlyIncome || monthlyIncome <= 0) {
    throw new Error('Monthly income must be a number greater than 0.')
  }

  if (!Array.isArray(monthlyExpenses) || monthlyExpenses.length === 0) {
    throw new Error('Expenses must be an array with at least one entry.')
  }
}

/**
 * Function to create a budget object based on user input in an application.
 *
 * @param {string} userName - The name of the user
 * @param {number} monthlyIncome - The monthly income of the user
 * @param {object} monthlyExpenses - The monthly expenses of the user
 * @returns {object} An object representing a summary of the user's budget.
 */
export function createBudget (userName, monthlyIncome, monthlyExpenses) {
  validateBudgetInput(userName, monthlyIncome, monthlyExpenses)

  // Calculate the total expenses
  let totalMonthlyExpenses = 0

  monthlyExpenses.forEach(expense => {
    if (typeof expense.amount !== 'number' || expense.amount <= 0) {
      throw new Error('Monthly expenses must be an array of objects with a number amount.')
    }
    totalMonthlyExpenses += expense.amount
  })

  const balance = monthlyIncome - totalMonthlyExpenses

  return {
    userName,
    monthlyIncome,
    monthlyExpenses,
    totalMonthlyExpenses,
    balance
  }
}
