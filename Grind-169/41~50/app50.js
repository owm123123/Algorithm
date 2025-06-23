// * String to Integer (atoi)
// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

// Input: s = "42"
// Output: 42

// Input: s = " -042"
// Output: -42

// Input: s = "1337c0d3"
// Output: 1337

// Input: s = "0-1"
// Output: 0

// Constraints:
// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

/**
 * * 步驟
 * * 1. trim + check length != 0
 * * 2. define sign， i， result
 * * 3. handle sign
 * * 4. handle pre 0 ex: "00"30
 * * 5. handle 0 - 9 (note: need charCodeAt)
 * * 6. * sign
 * * 7. -(2 ** 31) <= result <= (2 ** 31) - 1
 */

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  if (s.length === 0) return 0;

  let sign = 1,
    i = 0,
    result = 0;

  if (s[i] === '+' || s[i] === '-') {
    sign = s[i] === '+' ? 1 : -1;
    i++;
  }

  while (i < s.length && s[i] === '0') i++;
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
    i++;
  }

  result = result * sign;

  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;
  return result;
};
