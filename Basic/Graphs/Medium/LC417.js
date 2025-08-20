/**
 * 417. Pacific Atlantic Water Flow
 *
 * Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent,
 * the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.
 *
 * Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
 *
 * Find all cells from which water can flow to both the Pacific and Atlantic oceans.
 *
 * Example:
 * Input: heights = [
 *   [1,2,2,3,5],
 *   [3,2,3,4,4],
 *   [2,4,5,3,1],
 *   [6,7,1,4,5],
 *   [5,1,1,2,4]
 * ]
 * Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 *
 * Constraints:
 * - m == heights.length
 * - n == heights[i].length
 * - 1 <= m, n <= 200
 * - 0 <= heights[i][j] <= 10^5
 */

// Write your solution below:

class Solution {
  /**
   * @param {number[][]} heights
   * @return {number[][]}
   */
  pacificAtlantic(heights) {
    let rows = heights.length,
      cols = heights[0].length;
    let dest = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let arrP = Array.from({ length: rows }, () => Array(cols).fill(false));
    let arrA = Array.from({ length: rows }, () => Array(cols).fill(false));

    // * 這一題是說 哪些地方可以同時流向 兩海, 只是逆向思考 找兩海哪邊流到, 所以才是 heights[r][c] < prev
    let dfs = (r, c, arr, prev) => {
      if (
        r < 0 ||
        r >= rows ||
        c < 0 ||
        c >= cols ||
        heights[r][c] < prev ||
        arr[r][c] === true
      )
        return;
      arr[r][c] = true;
      for (let [dr, dc] of dest) {
        dfs(r + dr, c + dc, arr, heights[r][c]);
      }
    };

    // pacific
    for (let r = 0; r < rows; r++) {
      dfs(r, 0, arrP, heights[r][0]);
    }
    for (let c = 0; c < cols; c++) {
      dfs(0, c, arrP, 0, heights[0][c]);
    }
    // atlantic
    for (let r = 0; r < rows; r++) {
      dfs(r, cols - 1, arrA, heights[r][cols - 1]);
    }
    for (let c = 0; c < cols; c++) {
      dfs(rows - 1, c, arrA, heights[rows - 1][c]);
    }

    let res = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (arrP[r][c] && arrA[r][c]) {
          res.push([r, c]);
        }
      }
    }
    return res;
  }
}
