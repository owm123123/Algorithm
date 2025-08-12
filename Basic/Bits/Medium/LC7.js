/**
 * 7. Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Example 2:
 * Input: x = -123
 * Output: -321
 *
 * Example 3:
 * Input: x = 120
 * Output: 21
 *
 * Constraints:
 * -2^31 <= x <= 2^31 - 1
 */

// Write your solution here:
function reverse(x) {
  let MIN = -(2 ** 31);
  let MAX = 2 ** 31 - 1;

  // * 記錄正負號
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  let res = 0;

  // * 逐位反轉
  while (x > 0) {
    let digit = x % 10;
    // 檢查溢位
    if (res > Math.floor(MAX / 10)) return 0;
    res = res * 10 + digit;
    x = Math.floor(x / 10);
  }

  // * 還原正負號並檢查範圍
  res = res * sign;
  if (res < MIN || res > MAX) return 0;
  return res;
}
