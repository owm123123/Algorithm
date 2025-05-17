// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"
// ---------------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  let start = 0;
  let max = 0;

  const maxLength = (l, r) => {
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return r - l - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = maxLength(i, i);
    const len2 = maxLength(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > max) {
      max = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + max);
};
