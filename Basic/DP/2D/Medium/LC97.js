/*
* LeetCode 97. Interleaving String

Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:
- s = s1 + s2 + ... + sn
- t = t1 + t2 + ... + tm
- |n - m| <= 1
- The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

You may assume that all strings consist of lowercase letters.

Example 1:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

Example 2:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

Example 3:
Input: s1 = "", s2 = "", s3 = ""
Output: true

Constraints:
- 0 <= s1.length, s2.length <= 100
- 0 <= s3.length <= 200
- s1, s2, and s3 consist of lowercase English letters.

*/

class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @param {string} s3
   * @return {boolean}
   */
  isInterleave(s1, s2, s3) {
    /**
     * * 狀態定義
     * dp[i][j]：表示 s1 前 i 個、s2 前 j 個能否交錯組成 s3 前 i+j 個。
     * dp[0][0] = true
     *
     * 如果 s1 or s2 為空, 直接比對
     */
    let m = s1.length;
    let n = s2.length;
    if (m + n !== s3.length) return false;
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
    dp[0][0] = true;

    /**
     * * 狀態轉移
     * 如果 dp[i-1][j] 為 true 且 s1[i-1] == s3[i+j-1]，則 dp[i][j] = true
     * 如果 dp[i][j-1] 為 true 且 s2[j-1] == s3[i+j-1]，則 dp[i][j] = true
     */
    for (let i = 0; i < m + 1; i++) {
      for (let j = 0; j < n + 1; j++) {
        if (i > 0 && dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) {
          dp[i][j] = true;
        }
        if (j > 0 && dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]) {
          dp[i][j] = true;
        }
      }
    }
    return dp[m][n];
  }
}
