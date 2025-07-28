// * 74. Search a 2D Matrix
// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let row = Math.floor(mid / cols);
    let col = mid % cols;
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return matrix[left] === target ? true : false;
};
