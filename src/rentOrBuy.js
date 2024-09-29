/**
 * A module to calculate whether it is better to rent or buy.
 *
 * @author Sofie Swagemakers Herou
 */

/**
 * Function to calculate whether it is better to rent or buy.
 *
 * @param {number} priceToBuy - The price for the product or service.
 * @param {number} priceToRentPerMonth - The monthly cost for renting.
 * @param {number} lengthOfPeriodMonths - Planned renting period in months.
 * @returns {object} An object with parameters to compare the costs of renting and buying.
 */
export function rentOrBuy (priceToBuy, priceToRentPerMonth, lengthOfPeriodMonths) {
  const totalCostToBuy = priceToBuy
  const totalCostToRent = priceToRentPerMonth * lengthOfPeriodMonths
  const monthsToBreakEven = priceToBuy / priceToRentPerMonth

  return {
    monthlyBuyCost: priceToBuy / lengthOfPeriodMonths,
    monthlyRentCost: priceToRentPerMonth,
    totalCostToBuy,
    totalCostToRent,
    monthsToBreakEven
  }
}
