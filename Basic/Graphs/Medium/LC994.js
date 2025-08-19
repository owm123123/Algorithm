/**
 * LeetCode 994. Rotting Oranges
 *
 * You are given an m x n grid where each cell can have one of three values:
 *   - 0 representing an empty cell,
 *   - 1 representing a fresh orange, or
 *   - 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange.
 * If this is impossible, return -1.
 *
 * Example 1:
 * Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
 * Output: 4
 *
 * Example 2:
 * Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
 * Output: -1
 * Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
 *
 * Example 3:
 * Input: grid = [[0,2]]
 * Output: 0
 * Explanation: Since there are no fresh oranges, 0 minutes is required.
 *
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 10
 * - grid[i][j] is 0, 1, or 2.
 */

// Write your solution here:
class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  orangesRotting(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let step = 0;
    let dist = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let queue = []; // row col
    let count = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 2) {
          queue.push([r, c]);
        } else if (grid[r][c] === 1) {
          count++;
        }
      }
    }

    // ! 注意: 還有 count 才進入
    while (count > 0 && queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let [r, c] = queue.shift();
        for (let [dr, dc] of dist) {
          let nr = r + dr;
          let nc = c + dc;
          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            grid[nr][nc] === 1
          ) {
            count--;
            queue.push([nr, nc]);
            grid[nr][nc] = 2;
          }
        }
      }
      step++;
    }

    return count === 0 ? step : -1;
  }
}
