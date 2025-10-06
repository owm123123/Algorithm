/*
* 326. Power of Three

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three if there exists an integer x such that n == 3^x.

Example 1:
Input: n = 27
Output: true
Explanation: 27 = 3^3

Example 2:
Input: n = 0
Output: false
Explanation: 0 is not a power of three.

Example 3:
Input: n = 9
Output: true
Explanation: 9 = 3^2

Example 4:
Input: n = 45
Output: false

Constraints:
- -2^31 <= n <= 2^31 - 1
*/

// Best
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 3 !== 0) return false;
  return isPowerOfThree(n / 3);
};

/**
 * @param {number} n
 * @return {boolean}
 */

// Input: n = 27
// Output: true
// Explanation: 27 = 33

var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  for (let i = 0; 3 ** i <= n; i++) {
    if (3 ** i === n) return true;
  }
  return false;
};
