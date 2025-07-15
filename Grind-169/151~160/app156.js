// * Longest Increasing Path in a Matrix
// Given an m x n integers matrix, return the length of the longest increasing path in matrix.
// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).
// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].

// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

// Input: matrix = [[1]]
// Output: 1

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// * 如果是 arr[][]: 200 相當於 4w 的格子
// 0 <= matrix[i][j] <= 231 - 1

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  // * 單純 DFS + backtrack 會超時, 須加上 Memoization
  const rows = matrix.length;
  const cols = matrix[0].length;
  // * 記錄每一格最長距離
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let dfs = (r, c) => {
    if (dp[r][c]) return dp[r][c];
    let maxLen = 1;
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        matrix[nr][nc] > matrix[r][c]
      ) {
        maxLen = Math.max(maxLen, 1 + dfs(nr, nc));
      }
    }
    dp[r][c] = maxLen;
    return maxLen;
  };

  let res = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      res = Math.max(res, dfs(r, c));
    }
  }
  return res;
};
