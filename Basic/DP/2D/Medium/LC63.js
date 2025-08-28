/*
* 63. Unique Paths II

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish').

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space are marked as 1 and 0 respectively in the grid.

Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2

Example 2:
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1

Constraints:
- m == obstacleGrid.length
- n == obstacleGrid[i].length
- 1 <= m, n <= 100
- obstacleGrid[i][j] is 0 or 1
*/

class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  // 0 0 0
  // 0 0 0
  // 0 1 0

  // 1 1 1
  // 1 2 3
  // 1 0 3

  // 1 0
  uniquePathsWithObstacles(grid) {
    let r = grid.length,
      c = grid[0].length;
    let dp = Array.from({ length: r }, () => Array(c).fill(0));

    for (let i = 0; i < r; i++) {
      if (grid[i][0] === 0) dp[i][0] = 1;
      if (grid[i][0] === 1) break;
    }
    for (let i = 0; i < c; i++) {
      if (grid[0][i] === 0) dp[0][i] = 1;
      if (grid[0][i] === 1) break;
    }

    for (let i = 1; i < r; i++) {
      for (let j = 1; j < c; j++) {
        if (grid[i][j] === 1) {
          dp[i][j] = 0;
        } else {
          dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
      }
    }

    return dp[r - 1][c - 1];
  }
}
