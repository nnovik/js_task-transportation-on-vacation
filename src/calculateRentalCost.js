/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const fullPrice = dayCost * days;

  if (days >= 7) {
    return fullPrice - 50;
  }

  if (days >= 3) {
    return fullPrice - 20;
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
