// * 202. Happy Number
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:
// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

// Input: n = 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1

// Input: n = 2
// Output: false

// Constraints:
// 1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set();
  while (n !== 1) {
    // * 判斷是否進入循環（死循環）
    if (seen.has(n)) return false;
    seen.add(n);
    let sum = 0;
    let x = n;
    while (x > 0) {
      let d = x % 10;
      sum += d * d;
      x = Math.floor(x / 10);
    }
    n = sum;
  }
  return true;
};
