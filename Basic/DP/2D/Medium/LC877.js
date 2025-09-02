/*
*　LeetCode 877. Stone Game
* https://www.youtube.com/watch?v=xJ1Rc30Pyes
* LeetCode 486. Predict the Winner
* http://youtube.com/watch?v=g5wLHFTodm0

Alice and Bob are playing a game with piles of stones. There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The rules are:
- The players take turns, with Alice starting first.
- On each turn, a player takes either the first or the last pile from the row.
- The game continues until there are no more piles left.
- The player with the most stones wins.

Given an array piles where piles[i] is the number of stones in the ith pile, return true if Alice can win the game, assuming both Alice and Bob play optimally, otherwise return false.

Example:
Input: piles = [5,3,4,5]
Output: true

Constraints:
- 2 <= piles.length <= 500
- piles.length is even.
- 1 <= piles[i] <= 500

*/

/*
! 範例 piles = [5,3,4,5]

* dp[i][j]：在 piles[i...j] 區間，先手玩家比後手玩家多拿多少石頭。

* 初始化（區間長度 1）
dp[0][0] = 5
dp[1][1] = 3
dp[2][2] = 4
dp[3][3] = 5

* 區間長度 2
dp[0][1] = max(5 - dp[1][1], 3 - dp[0][0]) = max(5-3, 3-5) = max(2, -2) = 2
dp[1][2] = max(3 - dp[2][2], 4 - dp[1][1]) = max(3-4, 4-3) = max(-1, 1) = 1
dp[2][3] = max(4 - dp[3][3], 5 - dp[2][2]) = max(4-5, 5-4) = max(-1, 1) = 1

* 區間長度 3
dp[0][2] = max(5 - dp[1][2], 4 - dp[0][1]) = max(5-1, 4-2) = max(4, 2) = 4
dp[1][3] = max(3 - dp[2][3], 5 - dp[1][2]) = max(3-1, 5-1) = max(2, 4) = 4

* 區間長度 4
dp[0][3] = max(5 - dp[1][3], 5 - dp[0][2]) = max(5-4, 5-4) = max(1, 1) = 1

* dp[0][3] = 1 > 0，代表 Alice 先手可以比 Bob 多拿 1 顆石頭，Alice 一定能贏。
*/

class Solution {
  /**
   * @param {number[]} piles
   * @return {boolean}
   */
  stoneGame(piles) {
    // dp[i][j]：表示在 piles[i...j] 區間，先手玩家比後手玩家多拿多少石頭。
    let n = piles.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(0));
    // 初始化（區間長度 1）
    for (let i = 0; i < n; i++) dp[i][i] = piles[i];
    // len: 區間長度
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        let j = i + len - 1;
        dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
      }
    }
    return dp[0][n - 1] > 0;
  }
}
