// * Maximal Square
// Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 4

// Input: matrix = [["0","1"],["1","0"]]
// Output: 1

// Input: matrix = [["0"]]
// Output: 0

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  let maxLen = 0;
  let dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  for (let r = 1; r < rows + 1; r++) {
    for (let c = 1; c < cols + 1; c++) {
      if (matrix[r - 1][c - 1] === '1') {
        dp[r][c] = 1 + Math.min(dp[r - 1][c], dp[r - 1][c - 1], dp[r][c - 1]);
        maxLen = Math.max(maxLen, dp[r][c]);
      }
    }
  }
  return maxLen * maxLen;
};
