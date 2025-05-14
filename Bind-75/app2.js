//  Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 0;
  let set = new Set();
  let max = 0;

  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    } else {
      set.add(s[r]);
      r++;
      max = Math.max(r - l, max);
    }
  }
  return max;
};
