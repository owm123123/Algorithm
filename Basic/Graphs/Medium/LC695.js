/**
 * 695. Max Area of Island
 *
 * Given a 2D grid map of '1's (land) and '0's (water), return the area of the largest island in the grid.
 * An island is a group of connected 1s (connected horizontally or vertically).
 * You may assume all four edges of the grid are surrounded by water.
 *
 * Example 1:
 * Input: grid = [
 *   [0,0,1,0,0,0,0,1,0,0,0,0,0],
 *   [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *   [0,1,1,0,1,0,0,0,0,0,0,0,0],
 *   [0,1,0,0,1,1,0,0,1,0,1,0,0],
 *   [0,1,0,0,1,1,0,0,1,1,1,0,0],
 *   [0,0,0,0,0,0,0,0,0,0,1,0,0],
 *   [0,0,0,0,0,0,0,1,1,1,0,0,0],
 *   [0,0,0,0,0,0,0,1,1,0,0,0,0]
 * ]
 * Output: 6
 *
 * Example 2:
 * Input: grid = [[0,0,0,0,0,0,0,0]]
 * Output: 0
 *
 * Constraints:
 * - m == grid.length
 * - n == grid[i].length
 * - 1 <= m, n <= 50
 * - grid[i][j] is either 0 or 1.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // TODO: Implement your solution here
  let rows = grid.length,
    cols = grid[0].length;
  let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let max = 0;

  let dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
      return 0;
    }
    if (visited[r][c] === true || grid[r][c] === 0) {
      return 0;
    }

    visited[r][c] = true;

    return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1) + 1;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!visited[r][c] && grid[r][c] === 1) {
        max = Math.max(max, dfs(r, c));
      }
    }
  }

  return max;
};
