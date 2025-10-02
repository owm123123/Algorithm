/*
* 8. String to Integer (atoi)

Given a string s, implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:
1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive. Assume the result is positive if neither is present.
3. Read in the next characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e., "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
6. Return the integer as the final result.

Example 1:
Input: s = "42"
Output: 42

Example 2:
Input: s = "   -42"
Output: -42

Example 3:
Input: s = "4193 with words"
Output: 4193

Example 4:
Input: s = "words and 987"
Output: 0

Example 5:
Input: s = "-91283472332"
Output: -2147483648

Constraints:
- 0 <= s.length <= 200
- s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
*/

/**
 * @param {string} s
 * @return {number}
 */

// Input: s = "   0-1"
// Output: 0

// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)

var myAtoi = function (s) {
  let idx = 0;
  let len = s.length;

  // handle Step 1
  while (idx < len && s[idx] === ' ') {
    idx++;
  }

  // handle Step 2
  let sign = 1;
  if (idx < len && (s[idx] === '-' || s[idx] === '+')) {
    sign = s[idx] === '-' ? -1 : 1;
    idx++;
  }

  // handle Step 3
  let res = 0;
  while (idx < len && s[idx] >= '0' && s[idx] <= '9') {
    res = res * 10 + Number(s[idx]);
    idx++;
  }

  // handle Step 4 (overflow)
  let INT_MAX = 2 ** 31 - 1;
  let INT_MIN = -(2 ** 31);

  res = res * sign;
  res = res >= INT_MAX ? INT_MAX : res;
  res = res <= INT_MIN ? INT_MIN : res;

  return res;
};
