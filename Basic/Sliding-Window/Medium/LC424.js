/**
 * 424. Longest Repeating Character Replacement
 *
 * Given a string s and an integer k, you are allowed to choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 *
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 *
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 *
 * Example 2:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
 *
 * Constraints:
 * - 1 <= s.length <= 10^5
 * - s consists of only uppercase English letters.
 * - 0 <= k <= s.length
 */

// Write your solution here:
class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    // B B A A B A B A A
    let max = 0;
    let l = 0;
    let currMax = 0;
    let map = new Map();

    for (let r = 0; r < s.length; r++) {
      map.set(s[r], (map.get(s[r]) || 0) + 1);
      currMax = Math.max(map.get(s[r]), currMax);
      while (r - l + 1 - currMax > k) {
        map.set(s[l], map.get(s[l]) - 1);
        l++;
      }
      max = Math.max(max, r - l + 1);
    }
    return max;
  }
}
