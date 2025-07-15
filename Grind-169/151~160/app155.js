// * Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * !最終
 * * even: C(k-1) + C(K) / 2
 * * odd: C(k-1)
 * * C(): nums1 + nums2 的長度
 * * C(k-1): max(A(m1-1), B(m2-1))
 * * C(k) :  min(A(m1), B(m2))
 *
 * ! 過程
 * * k = A(m1) + B(m2) = (n1 + n2 + 1) / 2
 * * A(m1): 取 nums1 的元素
 * * B(m2): 取 nums2 的元素
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  // 保證 nums1 長度較小，這樣二分搜尋範圍較小
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

  // * k 是共需要多少元素
  let k = Math.floor((n1 + n2 + 1) / 2);

  // * 找出 m1, m2
  let l = 0;
  let r = n1;
  // 在 nums1 上二分搜尋切割點
  while (l < r) {
    let m1 = Math.floor((l + r) / 2); // nums1 的切割點
    let m2 = k - m1; // nums2 的切割點
    // * 如果 nums1[m1] < nums2[m2 - 1]，說明切割太左邊，要往右移
    if (nums1[m1] < nums2[m2 - 1]) {
      l = m1 + 1;
    } else {
      r = m1;
    }
  }

  let m1 = l;
  let m2 = k - l;
  // C(k-1): max(A(m1-1), B(m2-1))
  // ! 需處理可能 左右邊 都沒有處理到
  let c1 = Math.max(
    // 左邊數組都沒被使用
    m1 <= 0 ? -Infinity : nums1[m1 - 1],
    // 右邊數組都沒被使用
    m2 <= 0 ? -Infinity : nums2[m2 - 1]
  );

  // * 處理 總數量 為 odd
  if ((n1 + n2) % 2 === 1) return c1;

  // C(k):  min(A(m1), B(m2))
  // ! 需處理可能 左右邊 都沒有處理到
  let c2 = Math.min(
    m1 >= n1 ? Infinity : nums1[m1],
    m2 >= n2 ? Infinity : nums2[m2]
  );

  // 偶數長度，回傳中間兩個數的平均
  return (c1 + c2) / 2;
};
