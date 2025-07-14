// * Largest Rectangle in Histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

// Input: heights = [2,4]
// Output: 4

// Constraints:
// 1 <= heights.length <= 105
// 0 <= heights[i] <= 104

// * i=0, h=2
// stack 為空，push 0 → stack = [0]

// * i=1, h=1
// 1 < 2，pop 0
// h = 2, w = 1（i=1, stack 為空）
// area = 2*1 = 2，maxArea = 2
// push 1 → stack = [1]

// * i=2, h=5
// 5 > 1，push 2 → stack = [1,2]

// * i=3, h=6
// 6 > 5，push 3 → stack = [1,2,3]

// * i=4, h=2
// 2 < 6，pop 3
// h = 6, w = 1（i=4, stack top=2）
// area = 6*1 = 6，maxArea = 6
// 2 < 5，pop 2
// h = 5, w = 2（i=4, stack top=1）
// area = 5*2 = 10，maxArea = 10
// push 4 → stack = [1,4]

// * i=5, h=3
// 3 > 2，push 5 → stack = [1,4,5]

// * i=6, h=0
// 0 < 3，pop 5
// h = 3, w = 1（i=6, stack top=4）
// area = 3*1 = 3，maxArea = 10
// 0 < 2，pop 4
// h = 2, w = 4（i=6, stack top=1）
// area = 2*4 = 8，maxArea = 10
// 0 < 1，pop 1
// h = 1, w = 6（i=6, stack 為空）
// area = 1*6 = 6，maxArea = 10
// push 6 → stack = [6]

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // * 遇到比 stack 頂端矮的柱子時，就是「該計算前面高柱子最大面積的時機」。

  // * 處理尾端, 如果 一直結束到尾都是"遞增",需要收尾
  heights.push(0);
  let stack = []; // * stack 是存 idx
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let h = heights[stack.pop()];
      let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }
  return maxArea;
};
