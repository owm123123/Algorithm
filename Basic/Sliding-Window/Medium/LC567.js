/**
 * 567. Permutation in String
 *
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 *
 * In other words, return true if one of s1's permutations is the substring of s2.
 *
 * Example 1:
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 *
 * Example 2:
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 *
 * Constraints:
 * - 1 <= s1.length, s2.length <= 10^4
 * - s1 and s2 consist of lowercase English letters.
 */

// Write your solution here:
function checkInclusion(s1, s2) {
  // Your code here
  if (s2.length < s1.length) return false;
  let len = s1.length;
  let l = 0;
  let aCode = 'a'.charCodeAt(0);
  let ans = Array(26).fill(0);
  let curr = Array(26).fill(0);
  let match = (a, b) => {
    return a.every((v, i) => v === b[i]);
  };

  for (let i = 0; i < len; i++) {
    ans[s1[i].charCodeAt(0) - aCode]++;
    curr[s2[i].charCodeAt(0) - aCode]++;
  }
  if (match(ans, curr)) return true;

  for (let r = len; r < s2.length; r++) {
    curr[s2[r].charCodeAt(0) - aCode]++;
    curr[s2[l++].charCodeAt(0) - aCode]--;
    if (match(ans, curr)) return true;
  }
  return false;
}
