/*
LeetCode 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"

Output: false

Constraints:
- 1 <= s.length <= 10^4
- s consists of parentheses only '()[]{}'.

*/

// Write your solution here:
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stack = [];
    const map = new Map([
      ['}', '{'],
      [')', '('],
      [']', '['],
    ]);

    for (let c of s) {
      if (!map.has(c)) {
        stack.push(c);
      } else {
        if (map.get(c) != stack.pop()) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}
