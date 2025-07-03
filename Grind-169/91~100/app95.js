// * Find K Closest Elements
// Given a sorted integer array arr, two integers k and x,
// * return the k closest integers to x in the array.
// * 挑選 k 個數字離 x 最近
// * The result should also be sorted in ascending order.
// * 挑完後才排序喔

// An integer a is closer to x than an integer b if:
// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// Input: arr = [1,1,2,3,4,5], k = 4, x = -1
// Output: [1,1,2,3]

// Constraints:
// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

// * two pointer
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;
  while (right - left + 1 > k) {
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      right--;
    }
  }
  return arr.slice(left, right + 1);
};

// * binary search 尋找左界 (左閉右開 lower-bound)
// 1 2 3 4 5   2
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0;
  // ! 因為是尋找左界,所以不能超過 k
  let right = arr.length - k;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    // 比較 x 跟區間兩端的距離
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.slice(left, left + k);
};
