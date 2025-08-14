/**
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 *
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // TODO: Implement your solution here
  let max = 0;
  let set = new Set();
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    if (set.has(s[r])) {
      while (set.has(s[r])) {
        set.delete(s[l++]);
      }
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
};
