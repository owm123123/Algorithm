/*
* LeetCode 1049. Last Stone Weight II

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of this smash is:

- If x == y, both stones are destroyed.
- If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

At the end of the game, there is at most one stone left.

Return the smallest possible weight of the left stone. If there are no stones left, return 0.

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1

Example 2:
Input: stones = [31,26,33,21,40]
Output: 5

Constraints:
- 1 <= stones.length <= 30
- 1 <= stones[i] <= 100
*/

class Solution {
  /**
   * @param {number[]} stones
   * @return {number}
   */
  lastStoneWeightII(stones) {
    // 把所有石頭分成兩堆，讓兩堆重量差最小。
    // dp: 找出一個子集，總和最接近 sum/2。
    let sum = stones.reduce((a, b) => a + b, 0);
    let target = Math.floor(sum / 2);
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (let stone of stones) {
      for (let j = target; j >= stone; j--) {
        dp[j] = dp[j] || dp[j - stone];
      }
    }

    for (let j = target; j >= 0; j--) {
      if (dp[j]) return sum - 2 * j;
    }
    return 0;
  }
}
