/**
 * 304. Range Sum Query 2D - Immutable
 *
 * Given a 2D matrix matrix, handle multiple queries of the following type:
 *
 * Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Implement the NumMatrix class:
 * - NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 * - int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example:
 * Input
 * ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
 * [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
 * Output
 * [null, 8, 11, 12]
 *
 * Constraints:
 * - m == matrix.length
 * - n == matrix[i].length
 * - 1 <= m, n <= 200
 * - -10^5 <= matrix[i][j] <= 10^5
 * - 0 <= row1 <= row2 < m
 * - 0 <= col1 <= col2 < n
 * - At most 10^4 calls will be made to sumRegion.
 */

// Write your NumMatrix class below:
// * 前綴和 (Prefix Sum)
/*
! 左上外層加個 0 後套公式
  [0, 0, 0, 0, 0, 0]
  [0, 3, 0, 1, 4, 2]
  [0, 5, 6, 3, 2, 1]
  [0, 1, 2, 0, 1, 5]
  [0, 4, 1, 0, 1, 7]
  [0, 1, 0, 3, 0, 5]
  3  3  4
  8 14 18
*/
class NumMatrix {
  /**
   * @param {number[][]} matrix
   */
  constructor(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    this.sum = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // ! 因為 sum[r + 1][c] 和 sum[r][c + 1] 都加過 sum[r][c], 所以要減去 sum[r][c], 避免重複疊加
        this.sum[r + 1][c + 1] =
          matrix[r][c] +
          this.sum[r + 1][c] +
          this.sum[r][c + 1] -
          this.sum[r][c];
      }
    }
  }

  /**
   * @param {number} row1
   * @param {number} col1
   * @param {number} row2
   * @param {number} col2
   * @return {number}
   */
  sumRegion(row1, col1, row2, col2) {
    return (
      this.sum[row2 + 1][col2 + 1] -
      this.sum[row1][col2 + 1] -
      this.sum[row2 + 1][col1] +
      this.sum[row1][col1]
    );
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
