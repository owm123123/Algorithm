// * First Missing Positive
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

// Constraints:
// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

/**
 * ! 步驟 [3,4,-1,1]
 * * i = 0
 * nums[0] = 3，應該放到 index 2
 * swap nums[0] 和 nums[2] → [ -1, 4, 3, 1 ]
 * nums[0] = -1，不處理
 *
 * * i = 1
 * nums[1] = 4，應該放到 index 3
 * swap nums[1] 和 nums[3] → [ -1, 1, 3, 4 ]
 * nums[1] = 1，應該放到 index 0
 * swap nums[1] 和 nums[0] → [ 1, -1, 3, 4 ]
 * nums[1] = -1，不處理
 *
 * * i = 2
 * nums[2] = 3，應該在 index 2，已經正確
 *
 * * i = 3
 * nums[3] = 4，應該在 index 3，已經正確
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    // ! 注意: 邊界的定義以及取值都是跟 nums[0] = 1 有關係
    // * nums[nums[i] - 1] -> 現在 index i 的數字
    // ! nums[nums[i] - 1] !== nums[i] -> 防止 [2, 2, 1, ...] 卡住的情況
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // swap nums[i] & nums[nums[i] - 1]
      // ! 不能使用 nums[nums[i] - 1] 會造成死循環
      let temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }

  // [1,2,3]，都在正確位置，缺的是 4。
  return n + 1;
};
