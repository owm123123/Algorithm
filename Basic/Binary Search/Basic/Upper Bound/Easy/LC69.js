// * 69. Sqrt(x)
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// Constraints:
// 0 <= x <= 231 - 1

// * (l, r] - upper_bound -> 找到 第一個>t 的數 (exist)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0,
    right = x + 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
};
