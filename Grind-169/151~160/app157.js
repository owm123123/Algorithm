// * Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Input: s = ""
// Output: 0

// Constraints:
// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let stack = [];
  let max = 0;
  // * 關鍵：初始放一個 -1 當基準, 防止沒有 牆
  // * stcak 裡面的存 idx
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      // * 這就是為啥要先 push -1, 防止 stack 為空
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
};
