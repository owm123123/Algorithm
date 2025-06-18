// * Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let res = 0;
  let hasOdd = false;
  for (let v of map.values()) {
    res += Math.floor(v / 2) * 2;
    if (v % 2 === 1) hasOdd = true;
  }

  return hasOdd ? has + 1 : has;
};
