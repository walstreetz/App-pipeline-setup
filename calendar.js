
function validatePayoutDate(dayOfMonth) {
  
  if (typeof dayOfMonth !== 'number' || dayOfMonth < 1 || dayOfMonth > 31) {
    throw new Error("Invalid date: must be a number between 1 and 31");
  }

  // Bi-Weekly Salaries can only be paid after the 15th of the month
  if (dayOfMonth <= 15) {
    throw new Error("Salaries are only processed in the second half of the month");
  }

  return dayOfMonth;
}

module.exports = { validatePayoutDate };