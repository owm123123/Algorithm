// * 668. Kth Smallest Number in Multiplication Table
// * https://www.youtube.com/watch?v=qvtYRm4reL4 花花醬
// * https://www.youtube.com/watch?v=oL7JXNpiKJs wisdompeak
// Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).
// Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.

// Input: m = 3, n = 3, k = 5
// Output: 3
// Explanation: The 5th smallest number is 3.

// Input: m = 2, n = 3, k = 6
// Output: 6
// Explanation: The 6th smallest number is 6.

// Constraints:
// 1 <= m, n <= 3 * 104
// 1 <= k <= m * n

// 81

// * 由於 數值範圍 過大 -> 所以不能用 heap
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  let left = 1;
  let right = m * n + 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(n, Math.floor(mid / i));
    }

    if (count >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
