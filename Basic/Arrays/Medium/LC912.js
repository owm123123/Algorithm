/**
 * 912. Sort an Array
 *
 * Given an array of integers nums, sort the array in ascending order and return it.
 *
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
 * * 你必須不用任何內建排序函式，自己實作排序演算法，時間複雜度要 O(nlog(n))，而且空間複雜度要盡量小。
 *
 * Example 1:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 *
 * Example 2:
 * Input: nums = [5,1,1,2,0,0]
 * Output: [0,0,1,1,2,5]
 *
 * Constraints:
 * - 1 <= nums.length <= 5 * 10^4
 * - -5 * 10^4 <= nums[i] <= 5 * 10^4
 */

// ! sort 題目, 跟 hash 沒關係
// * 也可以用 merge sort 實做
// * 參考: https://neetcode.io/solutions/sort-an-array

// *　Quick Sort
class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  sortArray(nums) {
    function partition(left, right) {
      const mid = (left + right) >> 1;
      [nums[mid], nums[left + 1]] = [nums[left + 1], nums[mid]];

      if (nums[left] > nums[right])
        [nums[left], nums[right]] = [nums[right], nums[left]];
      if (nums[left + 1] > nums[right])
        [nums[left + 1], nums[right]] = [nums[right], nums[left + 1]];
      if (nums[left] > nums[left + 1])
        [nums[left], nums[left + 1]] = [nums[left + 1], nums[left]];

      const pivot = nums[left + 1];
      let i = left + 1;
      let j = right;

      while (true) {
        while (nums[++i] < pivot);
        while (nums[--j] > pivot);
        if (i > j) break;
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }

      nums[left + 1] = nums[j];
      nums[j] = pivot;
      return j;
    }

    function quickSort(left, right) {
      if (right <= left + 1) {
        if (right == left + 1 && nums[right] < nums[left])
          [nums[left], nums[right]] = [nums[right], nums[left]];
        return;
      }

      const j = partition(left, right);
      quickSort(left, j - 1);
      quickSort(j + 1, right);
    }

    quickSort(0, nums.length - 1);
    return nums;
  }
}
