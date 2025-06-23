// * Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0;
  let start = 0;

  // ! start 在 center 計算就不用那麼麻煩了
  let center = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      let temp = r - l + 1;
      if (temp > max) {
        max = temp;
        start = l;
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    center(i, i);
    center(i, i + 1);
  }

  return s.slice(start, start + max);
};
