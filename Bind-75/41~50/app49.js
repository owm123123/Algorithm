//* Word Search II

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [1,2,3]
// Output: 3
//-------------------------

//-------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const robLinear = (arr) => {
    let prev1 = 0;
    let prev2 = 0;

    for (let n of arr) {
      let temp = prev1;
      prev1 = Math.max(prev1, prev2 + n);
      prev2 = temp;
    }

    return prev1;
  };

  return Math.max(
    robLinear(nums.slice(1)),
    robLinear(nums.slice(0, nums.length - 1))
  );
};
