/**
 * Main JS file for the module.
 */

// Importing all the modules and classes.
import { Average } from './average.js'
import { validateBudgetInput, createBudget } from './createBudget.js'
import { validateNetPresentValueInputs, calculateNetPresentValue, rankInvestmentsOnNetPresentValue } from './netPresentValue.js'
import { calculateInternalRateOfReturn } from './irr.js'

// Exporting all public functions and classes.
export {
  Average,
  validateBudgetInput,
  createBudget,
  validateNetPresentValueInputs,
  calculateNetPresentValue,
  rankInvestmentsOnNetPresentValue,
  calculateInternalRateOfReturn
}
