// * Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

/* 解題思路 */
/* 1. 定義邊界 */
// 使用四個變數來表示矩陣的邊界：
// top：上邊界，初始值為 0。
// bottom：下邊界，初始值為矩陣的行數 - 1。
// left：左邊界，初始值為 0。
// right：右邊界，初始值為矩陣的列數 - 1。
/* 2. 模擬螺旋遍歷 */
// 按照以下順序遍歷矩陣：
// 從左到右：遍歷 top 行，然後 top++。
// 從上到下：遍歷 right 列，然後 right--。
// 從右到左：遍歷 bottom 行（如果還在邊界內），然後 bottom--。
// 從下到上：遍歷 left 列（如果還在邊界內），然後 left++。
// 重複上述步驟，直到邊界重疊。
/* 3. 停止條件 */
// 當 top > bottom 或 left > right 時，停止遍歷。

// time: O(m * n)
// space: O(1)

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length === 0) return [];

  let result = [];

  let top = 0;
  let left = 0;
  // ! 用 index 去記算，不要用 數量 (準確定義邊界)
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 左 -> 右
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // 上 -> 下
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // ! 建議都檢查，比較不會搞混
    // 右 -> 左
    if (top <= bottom && left <= right) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // 下 -> 上
    if (top <= bottom && left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
};
