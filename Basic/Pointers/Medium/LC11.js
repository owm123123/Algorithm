/*
LeetCode 11. Container With Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with the x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

Example:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Constraints:
- n == height.length
- 2 <= n <= 10^5
- 0 <= height[i] <= 10^4
*/

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0,
      right = heights.length - 1;
    let max = 0;
    while (left < right) {
      let h = Math.min(heights[left], heights[right]);
      let w = right - left;
      max = Math.max(max, h * w);
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
    return max;
  }
}
