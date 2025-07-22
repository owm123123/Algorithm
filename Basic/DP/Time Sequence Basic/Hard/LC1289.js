// * 1289. Minimum Falling Path Sum II
// Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts.
// A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column.
// * falling path with non-zero: 每一列只能選一個元素，且不能跟上一列選同一個 column（不能同欄）。
// * 上一行所有不是同欄的格子

// Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
// Output: 13
// Explanation:
// The possible falling paths are:
// [1,5,9], [1,5,7], [1,6,7], [1,6,8],
// [2,4,8], [2,4,9], [2,6,7], [2,6,8],
// [3,4,8], [3,4,9], [3,5,7], [3,5,9]
// The falling path with the smallest sum is [1,5,7], so the answer is 13.

// Input: grid = [[7]]
// Output: 7

// Constraints:
// n == grid.length == grid[i].length
// * 正方形
// 1 <= n <= 200
// -99 <= grid[i][j] <= 99

// * DP -> time: 33%, space: 15%
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  // * 找 min 應該用 Infinity
  let dp = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  for (let c = 0; c < cols; c++) {
    dp[0][c] = grid[0][c];
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // * 上一行所有不是同欄的格子
      for (let k = 0; k < cols; k++) {
        if (k !== c) dp[r][c] = Math.min(dp[r][c], dp[r - 1][k] + grid[r][c]);
      }
    }
  }

  return dp[rows - 1].reduce((a, b) => Math.min(a, b), Infinity);
};

// * 降維 -> time: 33%, space: 83% (提升)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  let n = grid.length;
  let prev = grid[0].slice();

  for (let r = 1; r < n; r++) {
    let curr = Array(n).fill(Infinity);
    for (let c = 0; c < n; c++) {
      for (let k = 0; k < n; k++) {
        if (k !== c) curr[c] = Math.min(curr[c], prev[k] + grid[r][c]);
      }
    }
    prev = curr;
  }
  return Math.min(...prev);
};

// * 最優解 -> time: 83%, space: 83%
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  let prev = grid[0];

  for (let r = 1; r < n; r++) {
    let curr = Array(n).fill(Infinity);

    // * 排序後只須要取 前2個最小值 做交換, 其他不需要
    const sorted = [...prev].sort((a, b) => a - b);
    const min1 = sorted[0];
    const min2 = sorted[1];
    const min1Index = prev.indexOf(min1);

    for (let c = 0; c < n; c++) {
      curr[c] = grid[r][c] + (c === min1Index ? min2 : min1);
    }
    prev = curr;
  }
  return Math.min(...prev);
};
