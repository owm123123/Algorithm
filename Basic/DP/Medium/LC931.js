// * 931. Minimum Falling Path Sum
// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
// * falling path: 每次只能往下一列的 "正下方、左下方、右下方" 其中一格走

// A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

// Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
// Output: 13
// Explanation: There are two falling paths with a minimum sum as shown.

// Input: matrix = [[-19,57],[-40,-5]]
// Output: -59
// Explanation: The falling path with a minimum sum is shown.

// Constraints:
// n == matrix.length == matrix[i].length
// * 正方形
// 1 <= n <= 100
// -100 <= matrix[i][j] <= 100

// * DP -> time: 27%, space: 27%
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let dp = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  for (let c = 0; c < cols; c++) {
    dp[0][c] = matrix[0][c];
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (c === 0) {
        dp[r][c] = Math.min(dp[r - 1][c], dp[r - 1][c + 1]);
      } else if (c === cols - 1) {
        dp[r][c] = Math.min(dp[r - 1][c - 1], dp[r - 1][c]);
      } else {
        dp[r][c] = Math.min(dp[r - 1][c - 1], dp[r - 1][c], dp[r - 1][c + 1]);
      }
      dp[r][c] += matrix[r][c];
    }
  }

  return dp[rows - 1].reduce((a, b) => Math.min(a, b), Infinity);
};

// * 降維 -> time: 80%, space: 90%
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let dp = [...matrix[0]]; // 只記錄上一列的最小值

  for (let r = 1; r < n; r++) {
    let newDp = Array(n).fill(0);
    for (let c = 0; c < n; c++) {
      let minPrev = dp[c];
      if (c > 0) minPrev = Math.min(minPrev, dp[c - 1]);
      if (c < n - 1) minPrev = Math.min(minPrev, dp[c + 1]);
      newDp[c] = matrix[r][c] + minPrev;
    }
    dp = newDp;
  }
  return Math.min(...dp);
};
