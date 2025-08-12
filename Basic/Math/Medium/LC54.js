/**
 * 54. Spiral Matrix
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 * Example 1:
 * Input: matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 * Example 2:
 * Input: matrix = [
 *   [1, 2, 3, 4],
 *   [5, 6, 7, 8],
 *   [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 * Constraints:
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 10
 * - -100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // Write your code here
  let top = 0,
    bottom = matrix.length - 1;
  let left = 0,
    right = matrix[0].length - 1;
  let res = [];

  while (top <= bottom && left <= right) {
    // left -> right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // top -> bottom
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // right -> left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // bottom -> top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }
  return res;
};
