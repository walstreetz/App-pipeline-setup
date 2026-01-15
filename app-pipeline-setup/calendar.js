
function validatePayoutDate(dayOfMonth) {
  
  if (typeof dayOfMonth !== 'number' || dayOfMonth < 1 || dayOfMonth > 31) {
    throw new Error("Invalid date: must be a number between 1 and 31");
  }

  // Business rule: First half of month is blocked
  if (dayOfMonth <= 15) {
    throw new Error("Payouts are only processed in the second half of the month");
  }

  return dayOfMonth;
}

module.exports = { validatePayoutDate };