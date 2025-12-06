/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const basePrice = dayCost * days;
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return basePrice - MIDDLE_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
