/*
LeetCode 338. Counting Bits

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
ans[i] is the number of 1's in the binary representation of i.

Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

Constraints:
- 0 <= n <= 10^5
*/

// Write your solution below:
class Solution {
  /**
   * @param {number} n
   * @return {number[]}
   */
  countBits(n) {
    let res = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
      if (i === 0) {
        res[i] = 0;
      } else if (i === 1) {
        res[i] = 1;
      } else {
        res[i] = res[i >> 1] + (i & 1);
      }
    }
    return res;
  }
}
