// * Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Input: height = [4,2,0,3,2,5]
// Output: 9

// Constraints:
// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105

// * Two pointer Beat100%
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let leftmax = 0;
  let rightmax = 0;
  let water = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftmax) {
        leftmax = height[left];
      } else {
        water += leftmax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightmax) {
        rightmax = height[right];
      } else {
        water += rightmax - height[right];
      }
      right--;
    }
  }

  return water;
};

// * DP
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  if (n === 0) return 0;
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};
