// * Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // * 因為是數字，所以不能用two pointer
  let res = 0;
  let sign = x > 0 ? 1 : -1;
  x = Math.abs(x);
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  res *= sign;
  if (res < -(2 ** 31) || res > 2 ** 31 - 1) return 0;
  return res;
};
