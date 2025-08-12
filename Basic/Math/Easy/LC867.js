/**
 * 867. Transpose Matrix
 *
 * Given a 2D integer array matrix, return the transpose of matrix.
 *
 * The transpose of a matrix is the matrix flipped over its main diagonal,
 * switching the matrix's row and column indices.
 *
 * Example 1:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[1,4,7],[2,5,8],[3,6,9]]
 *
 * Example 2:
 * Input: matrix = [[1,2,3],[4,5,6]]
 * Output: [[1,4],[2,5],[3,6]]
 *
 * Constraints:
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 1000
 * - 1 <= matrix[i][j] <= 10^9
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  // TODO: Write your code here
  let rows = matrix.length,
    cols = matrix[0].length;
  let res = Array.from({ length: cols }, () => Array(rows).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res[j][i] = matrix[i][j];
    }
  }
  return res;
};
