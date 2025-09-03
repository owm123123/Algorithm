/**
 * * LeetCode 88. Merge Sorted Array
 * * https://medium.com/@ChYuan/leetcode-no-88-merge-sorted-array-%E5%BF%83%E5%BE%97-easy-9d2b3141ded3 (ChingYuanYang)
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 *
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
 *
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 *
 * Constraints:
 * - nums1.length == m + n
 * - nums2.length == n
 * - 0 <= m, n <= 200
 * - 1 <= m + n <= 200
 * - -10^9 <= nums1[i], nums2[i] <= 10^9
 */

// Write your solution here:
class Solution {
  /**
   * @param {number[]} nums1
   * @param {number} m
   * @param {number[]} nums2
   * @param {number} n
   * @return {void} Do not return anything, modify nums1 in-place instead.
   */
  // * 從大到小排序，也就是從 nums1 後面開始放起，最大數字開始放。
  merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = nums1.length - 1;

    while (p1 >= 0 && p2 >= 0) {
      if (nums1[p1] > nums2[p2]) {
        nums1[p] = nums1[p1];
        p1--;
      } else {
        nums1[p] = nums2[p2];
        p2--;
      }
      p--;
    }

    // * 補 p2 沒放玩的樹
    while (p2 >= 0) {
      nums1[p] = nums2[p2];
      p2--;
      p--;
    }
  }
}
