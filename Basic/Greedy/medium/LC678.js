/**
 * 678. Valid Parenthesis String
 *
 * Given a string s containing only three types of characters: '(', ')' and '*',
 * return true if s is valid.
 *
 * The following rules define a valid string:
 * 1. Any left parenthesis '(' must have a corresponding right parenthesis ')'.
 * 2. Any right parenthesis ')' must have a corresponding left parenthesis '('.
 * 3. Left parenthesis '(' must go before the corresponding right parenthesis ')'.
 * 4. '*' could be treated as a single right parenthesis ')', a single left parenthesis '(', or an empty string "".
 * 5. An empty string is also valid.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "(*)"
 * Output: true
 *
 * Example 3:
 * Input: s = "(*))"
 * Output: true
 *
 * Constraints:
 * - 1 <= s.length <= 100
 * - s[i] is '(', ')' or '*'.
 */

// Write your solution here:
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  checkValidString(s) {
    // * min: 把所有 * 都當作 ')' or ''。
    // * max: 把所有 * 都當作 '('。
    let min = 0;
    let max = 0;

    for (let c of s) {
      if (c === '(') {
        min++;
        max++;
      } else if (c === ')') {
        min--;
        max--;
      } else if (c === '*') {
        min--;
        max++;
      }

      // *　把所有 * 都當作 '(', 右括號還是太多
      if (max < 0) return false;
      // * minOpen 不可小於 0（因為 * 可以當空字串）
      min = Math.max(min, 0);
    }
    return min === 0;
  }
}
