// * 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Input: nums = [1,0,1,2]
// Output: 3

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let max = 0;

  for (let n of nums) {
    let temp = n;
    if (!set.has(temp - 1)) {
      while (set.has(temp)) {
        temp++;
      }
    }
    max = Math.max(max, temp - n);
  }
  return max;
};
