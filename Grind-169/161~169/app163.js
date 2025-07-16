// * Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let deque = []; // * 存idx
  for (let i = 0; i < nums.length; i++) {
    // 若 隊首 idx 超過視窗 移除
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // 維持單調遞減，移除隊尾比當前小的
    // * 確保 dequeue[0] 是最大的
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // 只有當視窗長度達到 k 時，才有一個完整的滑動視窗
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};
