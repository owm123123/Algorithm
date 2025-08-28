/*
* 64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
Input: grid = [[1,2,3],[4,5,6]]
Output: 12

Constraints:
- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 200
- 0 <= grid[i][j] <= 200
*/

class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  // 1 2 0
  // 5 4 2
  // 1 1 3

  // 1 3 3
  // 6 7 5
  // 7 8 8
  minPathSum(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (r === 0 && c === 0) dp[r][c] = grid[r][c];
        else if (r === 0) dp[r][c] = dp[r][c - 1] + grid[r][c];
        else if (c === 0) dp[r][c] = dp[r - 1][c] + grid[r][c];
        else dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c];
      }
    }

    return dp[rows - 1][cols - 1];
  }
}
