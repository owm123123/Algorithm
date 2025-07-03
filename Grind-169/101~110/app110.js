// * Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

// Constraints:
// 1 <= k <= nums.length <= 105
// -104 <= nums[i] <= 104

// * min Heap
/**
 * * 用一個最小堆（MinPriorityQueue），每次放入一個數字。
 * * 如果堆的大小超過 k，就把最小的（堆頂）移除。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let minHeap = new MinPriorityQueue();

  for (let num of nums) {
    minHeap.enqueue(num);

    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }
  return minHeap.front();
};

// * Beat 100%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minValue = Math.min(...nums);
  const maxValue = Math.max(...nums);

  const count = new Array(maxValue - minValue + 1).fill(0);

  for (const num of nums) {
    count[num - minValue]++;
  }

  let remaining = k;
  for (let i = count.length - 1; i >= 0; i--) {
    remaining -= count[i];

    if (remaining <= 0) {
      return i + minValue;
    }
  }
};
