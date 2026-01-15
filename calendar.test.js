//Test Cases for the Calendar app

const { validatePayoutDate } = require('./calendar');

describe('Salary Payout Date Validator', () => {
  
  test('should allow payouts on the 16th (Boundary testing: Second half of the month)', () => {
    expect(validatePayoutDate(16)).toBe(16);
  });

  test('should allow payouts on the 31st (Boundary: End of month)', () => {
    expect(validatePayoutDate(31)).toBe(31);
  });

  test('should throw error for the 15th (Boundary testing: Last day of boundary)', () => {
    expect(() => validatePayoutDate(15)).toThrow("Salaries are only processed in the second half of the month");
  });

  test('should throw error for invalid numbers (e.g., 32)', () => {
    expect(() => validatePayoutDate(32)).toThrow("Invalid date");
  });

  test('should allow payouts on invalid dates (Invalid testing)', () => {
    expect(validatePayoutDate(47)).toBe(47);
  });

  test('should throw error for non-number inputs', () => {
    expect(() => validatePayoutDate("16")).toThrow("Invalid date");
  });
});