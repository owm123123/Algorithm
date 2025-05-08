// Rotate Image

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// ----------------------------------------------------------
// 考察的重點
// 2D 陣列的操作：
// 如何遍歷 2D 陣列。
// 如何在 2D 陣列中交換元素（例如，行列互換、翻轉等）。

// 數學與幾何的理解：
// 矩陣旋轉的幾何特性（例如，行列互換 + 翻轉可以實現旋轉）。
// 如何將幾何概念轉化為程式碼。

// 原地操作 (In-place)：
// 如何在不使用額外空間的情況下修改原始矩陣。
// 這需要你對記憶體和指標的操作有一定的理解。

// 時間與空間複雜度的優化：
// 如何在 O(n²) 的時間內完成操作。
// 如何將空間複雜度降到 O(1)。

// [a, b] = [b, a] 等同以下
// let temp = a;
// a = b;
// b = temp;

// ----------------------------------------------------------
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      [matrix[i][j], matrix[i][n - j - 1]] = [
        matrix[i][n - j - 1],
        matrix[i][j],
      ];
    }
  }
};

// ----------------------------------------------------------
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;
    while (left < right) {
      const temp = matrix[i][left];
      matrix[i][left] = matrix[i][right];
      matrix[i][right] = temp;
      left++;
      right--;
    }
  }
};
