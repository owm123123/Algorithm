/*
* LeetCode 461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.

Example 1:
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
  ↑   ↑
The above arrows point to positions where the corresponding bits are different.

Example 2:
Input: x = 3, y = 1
Output: 1

Constraints:
- 0 <= x, y <= 2^31 - 1
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// * 這一題是再找 這兩個數有幾個1在不同位置
var hammingDistance = function (x, y) {
  let count = 0;
  let xor = x ^ y;
  while (xor !== 0) {
    count += xor & 1;
    xor = xor >>> 1;
  }
  return count;
};
