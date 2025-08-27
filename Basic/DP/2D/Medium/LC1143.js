/*
* LeetCode 1143. Longest Common Subsequence
* https://emmielin.medium.com/leetcode-%E7%AD%86%E8%A8%98-1143-longest-common-subsequence-b6c7eebd1328

Given two strings text1 and text2, return the length of their longest common subsequence. 
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

Example 1:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no common subsequence.

Constraints:
- 1 <= text1.length, text2.length <= 1000
- text1 and text2 consist of only lowercase English characters.

*/

class Solution {
  /**
   * @param {string} text1
   * @param {string} text2
   * @return {number}
   */
  longestCommonSubsequence(text1, text2) {
    // * dp[i][j]: text1 前 i 個字元 和 text2 前 j 個字元的 LCS 長度。

    let m = text1.length;
    let n = text2.length;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        // LCS("ace", "abcde") = 1 + LCS("ac", "abcd")
        if (text1[i - 1] === text2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        }
        // LCS("ac", "abcd") = Max(LCS("a", "abcd"), LCS("ac", "abc"))
        else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[m][n];
  }
}
