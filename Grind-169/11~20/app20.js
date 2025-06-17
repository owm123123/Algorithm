// * Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let l = 0;
  let set = new Set();

  for (let r = 0; r < s.length; r++) {
    if (set.has(s[r])) {
      while (set.has(s[r])) {
        set.delete(s[l]);
        l++;
      }
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }

  return max;
};
