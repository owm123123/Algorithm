// Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (let n of numSet) {
    // 表示 num 為起點
    if (!numSet.has(n - 1)) {
      let length = 1;

      while (numSet.has(n + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};
