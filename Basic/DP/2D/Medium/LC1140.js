/*
* LeetCode 1140. Stone Game II
* https://www.youtube.com/watch?v=liA938-cdfM (Huifeng)
* https://www.youtube.com/watch?v=e_FrC5xavwI (花花醬)


Alice and Bob continue their games with piles of stones. There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i]. The objective of the game is to collect the most stones.

Alice and Bob take turns, with Alice starting first. Initially, M = 1.

On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M. Then, we set M = max(M, X).

The game continues until all the stones have been taken.

Assuming both Alice and Bob play optimally, return the maximum number of stones Alice can get.

Example 1:
Input: piles = [2,7,9,4,4]
Output: 10

Example 2:
Input: piles = [1,2,3,4,5,6]
Output: 12

Constraints:
- 1 <= piles.length <= 100
- 1 <= piles[i] <= 10^4
*/

class Solution {
  /**
   * @param {number[]} piles
   * @return {number}
   */
  stoneGameII(piles) {
    const n = piles.length;
    // 後綴和
    const suffixSum = Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
      suffixSum[i] = suffixSum[i + 1] + piles[i];
    }
    // 記憶化
    const memo = Array.from({ length: n + 1 }, () => Array(n + 1).fill(-1));
    function dfs(i, m) {
      if (i >= n) return 0;
      if (memo[i][m] !== -1) return memo[i][m];
      let maxStones = 0;
      for (let x = 1; x <= 2 * m; x++) {
        if (i + x > n) break;
        // 拿 x 堆，剩下的交給對手
        let next = dfs(i + x, Math.max(m, x));
        maxStones = Math.max(maxStones, suffixSum[i] - next);
      }
      memo[i][m] = maxStones;
      return maxStones;
    }
    return dfs(0, 1);
  }
}
