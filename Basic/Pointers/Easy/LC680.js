/**
 * * LeetCode 680. Valid Palindrome II
 *
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 *
 * Example 1:
 * Input: s = "aba"
 * Output: true
 *
 * Example 2:
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 *
 * Example 3:
 * Input: s = "abc"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of lowercase English letters.
 */

// Write your solution here:
class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  validPalindrome(s) {
    let left = 0,
      right = s.length - 1;
    let isDel = false;

    let isValid = (l, r) => {
      while (l <= r) {
        if (s[l] !== s[r]) {
          if (isDel) {
            return false;
          } else {
            isDel = !isDel;
            return isValid(l + 1, r) || isValid(l, r - 1);
          }
        } else {
          l++;
          r--;
        }
      }
      return true;
    };

    return isValid(left, right);
  }
}
