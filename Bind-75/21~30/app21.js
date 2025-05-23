// Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// ---------------------------------------------------------
// 解題技巧
// 用 counter 記比較快
// 行 (row) 是橫向，對應外層迴圈。
// 列 (column) 是縱向，對應內層迴圈。
// ---------------------------------------------------------
/**
 * @description 解法：使用 Counter 計數策略處理行與列的狀態
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = new Set();
  let column = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        column.add(j);
      }
    }
  }

  for (let r of row) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[r][j] = 0;
    }
  }

  for (let c of column) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0;
    }
  }

  return matrix;
};

// ---------------------------------------------------------
/**
 * @description 解法：Mark
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  /**
   * @param {number[][]} matrix
   * @return {void} Do not return anything, modify matrix in-place instead.
   */
  var setZeroes = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let firstRowHasZero = false;
    let firstColHasZero = false;

    for (let j = 0; j < cols; j++) {
      if (matrix[0][j] === 0) {
        firstRowHasZero = true;
        break;
      }
    }
    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] === 0) {
        firstColHasZero = true;
        break;
      }
    }

    for (let i = 1; i < rows; i++) {
      for (let j = 1; j < cols; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }

    for (let i = 1; i < rows; i++) {
      if (matrix[i][0] === 0) {
        for (let j = 0; j < cols; j++) {
          matrix[i][j] = 0;
        }
      }
    }

    for (let j = 1; j < cols; j++) {
      if (matrix[0][j] === 0) {
        for (let i = 0; i < rows; i++) {
          matrix[i][j] = 0;
        }
      }
    }

    if (firstRowHasZero) {
      for (let j = 0; j < cols; j++) {
        matrix[0][j] = 0;
      }
    }

    if (firstColHasZero) {
      for (let i = 0; i < rows; i++) {
        matrix[i][0] = 0;
      }
    }
  };
};
