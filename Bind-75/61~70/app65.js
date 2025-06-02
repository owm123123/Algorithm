// * Longest Increasing Subsequence
// Given an integer array nums, return the length of the
// ! longest strictly increasing subsequence.
/**
 * ! subsequence: 可以跳過元素，只要保持原本順序即可，不需要連續。
 * ! subarray: 必須是連續的一段。
 * ! strictly increasing: 每個數都比前一個大
 * ! 沒有 strictly 可以接受 大於等於
 */

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Input: nums = [0,1,0,3,2,3]
// Output: 4

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
//-------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let dp = new Array(nums.length).fill(1);
  dp[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        // ! dp[j] + 1 須留意
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp.reduce((max, num) => Math.max(max, num), 0);
};
//-------------------------

/**
 * @param {number[]} nums
 * @return {number}
 * @description // * 100%
 */
var lengthOfLIS = function (nums) {
  const stack = [nums[0]];
  let maxLength = 1;

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    if (curr > stack[stack.length - 1]) {
      stack.push(curr);
      maxLength += 1;
    } else {
      for (let j = stack.length - 1; j >= 0; j--) {
        if (stack[j] < curr) {
          stack[j + 1] = curr;
          break;
        }
        if (j === 0) {
          stack[0] = curr;
        }
      }
    }
  }
  return maxLength;
};
//-------------------------

/**
 * @param {number[]} nums
 * @return {number}
 * @description // * O(nlogn) => Greedy + Binary Search
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let tails = [];
  for (let num of nums) {
    let left = 0,
      right = tails.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }
    tails[left] = num;
  }
  return tails.length;
};

/**
 * 
1. num = 10
tails 為空，直接 push
tails = [10]

2. num = 9
9 < 10，用 9 替換 tails[0]
tails = [9]

3. num = 2
2 < 9，用 2 替換 tails[0]
tails = [2]

4. num = 5
5 > 2，left = 1，push
tails = [2, 5]

5. num = 3
3 > 2，但 < 5，用 3 替換 tails[1]
tails = [2, 3]

6. num = 7
7 > 3，left = 2，push
tails = [2, 3, 7]

7. num = 101
101 > 7，left = 3，push
tails = [2, 3, 7, 101]

8. num = 18
18 > 7，但 < 101，用 18 替換 tails[3]
tails = [2, 3, 7, 18]

 */
