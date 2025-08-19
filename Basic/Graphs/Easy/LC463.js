/*
463. Island Perimeter

You are given a 2D grid map of '1's (land) and '0's (water). 
Grid cells are connected horizontally/vertically (not diagonally). 
The grid is completely surrounded by water, and there is exactly one island (one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). 
Each cell is square, with side length 1.

Return the perimeter of the island.

Example 1:
Input: grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
]
Output: 16

Constraints:
- 1 <= grid.length, grid[i].length <= 100
- grid[i][j] is 0 or 1.

--------------------------
Write your code below:
*/

// * DFS
function islandPerimeter(grid) {
  // TODO: Implement this function
  let rows = grid.length;
  let cols = grid[0].length;

  let visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  let dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
      return 1;
    }
    if (visited[r][c] === true) {
      return 0;
    }

    visited[r][c] = true;
    return dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  };

  // * 因為只有一個島嶼, 所以可以直接 return
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        return dfs(r, c);
      }
    }
  }
  return 0;
}

// * Iteration I
class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  islandPerimeter(grid) {
    const m = grid.length,
      n = grid[0].length;
    let res = 0;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          res += i + 1 >= m || grid[i + 1][j] === 0 ? 1 : 0;
          res += j + 1 >= n || grid[i][j + 1] === 0 ? 1 : 0;
          res += i - 1 < 0 || grid[i - 1][j] === 0 ? 1 : 0;
          res += j - 1 < 0 || grid[i][j - 1] === 0 ? 1 : 0;
        }
      }
    }
    return res;
  }
}
