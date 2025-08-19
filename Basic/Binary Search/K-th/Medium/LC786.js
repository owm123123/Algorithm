// * 786. K-th Smallest Prime Fraction
// You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique. You are also given an integer k.
// For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
// Return the kth smallest fraction considered. Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].
// * smallest fraction: 最小分數

// Input: arr = [1,2,3,5], k = 3
// Output: [2,5]
// Explanation: The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
// The third fraction is 2/5.

// Input: arr = [1,7], k = 1
// Output: [1,7]

// Constraints:
// 2 <= arr.length <= 1000
// 1 <= arr[i] <= 3 * 104
// arr[0] == 1
// arr[i] is a prime number for i > 0.
// All the numbers of arr are unique and sorted in strictly increasing order.
// 1 <= k <= arr.length * (arr.length - 1) / 2

// Follow up: Can you solve the problem with better than O(n2) complexity?

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  const n = arr.length;
  let left = 0;
  let right = 1;
  while (right - left > 1e-9) {
    let mid = (left + right) / 2;

    let max_f = 0;
    let total = 0;
    let p = 0;
    let q = 1;
    let j = 1;
    for (let i = 0; i < n - 1; ++i) {
      while (j < n && arr[i] > mid * arr[j]) ++j;
      if (j === n) break;
      total += n - j;
      let f = arr[i] / arr[j];
      if (f > max_f) {
        max_f = f;
        p = i;
        q = j;
      }
    }

    if (total === k) {
      return [arr[p], arr[q]];
    } else if (total > k) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return [];
};
