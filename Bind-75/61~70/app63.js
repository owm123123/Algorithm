// * Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  /**
   * * Longest Common Subsequence (LCS) 要求順序也一樣
   * * DP 解題
   * * text1[i-1] = test2[j-1] = dp[i-1][j-1] + 1
   * * text1[i-1] != test2[j-1] = Max(dp[i-1][j], dp[i][j-1])
   */

  let rows = text1.length;
  let cols = text2.length;
  let dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      // ! index多位移了一行，但字串應該從0開始
      if (text1[row - 1] === text2[col - 1]) {
        dp[row][col] = 1 + dp[row - 1][col - 1];
      } else {
        dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  return dp[rows][cols];
};
