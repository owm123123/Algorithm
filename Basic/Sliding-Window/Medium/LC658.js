/*
* 658. Find K Closest Elements

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:
|a - x| < |b - x|, or
|a - x| == |b - x| and a < b

Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]

Constraints:
1 <= k <= arr.length
1 <= arr.length <= 10^4
arr is sorted in ascending order.
-10^4 <= arr[i], x <= 10^4
*/

/*
* 題意
1. 給你一個已排序的整數陣列 arr，一個整數 x，和一個整數 k。
2. 要你回傳「陣列中最接近 x 的 k 個元素」，結果要升序排列。
3. 如果有兩個數距離 x 一樣近，選較小的那個。
*/

/*
* Binary Search 最佳解
> 時間複雜度 O(log(n-k) + k)
> 用二分搜尋找出「最接近 x 的 k 個元素的起始位置」
> 只需 slice 一次，效率高
 */
class Solution {
  /**
   * @param {number[]} arr
   * @param {number} k
   * @param {number} x
   * @return {number[]}
   */
  // arr = [1,2,3,4,5], k = 2, x = 3
  findClosestElements(arr, k, x) {
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
  }
}

/*
* Sliding Window
> 時間複雜度 O(n)
> 需要遍歷整個陣列，移動左右指標直到找到 k 個最近的元素
> 對於大陣列，效率較低
 */
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
