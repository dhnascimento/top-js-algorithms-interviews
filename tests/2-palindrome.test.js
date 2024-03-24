const palindrome = require('../exercises/2-palindrome');

describe('palindrome', () => {
  test('handles empty string', () => {
    expect(palindrome('')).toBe(true);
  });

  test('handles single character string', () => {
    expect(palindrome('a')).toBe(true);
  });

  test('identifies single-word palindromes', () => {
    expect(palindrome('racecar')).toBe(true);
    expect(palindrome('madam')).toBe(true);
    expect(palindrome('kayak')).toBe(true); // Handles mixed case
  });

  test('identifies non-palindromes', () => {
    expect(palindrome('hello')).toBe(false);
    expect(palindrome('Daniel')).toBe(false);
  });
});
