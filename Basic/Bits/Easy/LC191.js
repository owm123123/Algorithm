/**
 * 191. Number of 1 Bits
 *
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * Example 1:
 * Input: n = 00000000000000000000000000001011
 * Output: 3
 * Explanation: The input binary string has a total of three '1' bits.
 *
 * Example 2:
 * Input: n = 00000000000000000000000010000000
 * Output: 1
 * Explanation: The input binary string has a total of one '1' bit.
 *
 * Example 3:
 * Input: n = 11111111111111111111111111111101
 * Output: 31
 * Explanation: The input binary string has a total of thirty-one '1' bits.
 *
 * Note:
 * - Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same.
 * - In Java, the argument is passed as an int type. In C/C++, the argument is passed as an unsigned type.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  // Write your code here
  let count = 0;
  while (n > 0) {
    if (n & 1) count++;
    n >>= 1;
  }
  return count;
}

// * Bit Mask (Optimal) O(1)
/**
 * * n &= n - 1 每次會把 n 的最低位的 1 消掉。
 *
 * 假設 n = 13（二進位 1101）：
 * 第一次：n = 13 → 12（1100），消掉最低位 1
 * 第二次：n = 12 → 8（1000），消掉最低位 1
 * 第三次：n = 8 → 0，消掉最低位 1 總共 3 次，答案就是 3。
 */
class Solution {
  /**
   * @param {number} n - a positive integer
   * @return {number}
   */
  hammingWeight(n) {
    let res = 0;
    while (n !== 0) {
      n &= n - 1;
      res++;
    }
    return res;
  }
}
