/**
 * 139. Word Break
 *
 * Given a string s and a list of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 *
 * Example 1:
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 *
 * Example 2:
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 *
 * Example 3:
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length <= 300
 * - 1 <= wordDict.length <= 1000
 * - 1 <= wordDict[i].length <= 20
 * - s and wordDict[i] consist of only lowercase English letters.
 * - All the strings of wordDict are unique.
 */

// Write your solution here:
class Solution {
  /**
   * @param {string} s
   * @param {string[]} wordDict
   * @return {boolean}
   */
  // 'neetcode '
  // * 下一個開頭的字母設定成 true
  wordBreak(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    let words = new Set(wordDict);
    dp[0] = true;
    let maxLen = Math.max(...wordDict.map((w) => w.length));
    for (let i = 0; i < s.length; i++) {
      if (!dp[i]) continue;
      for (let j = i + 1; j <= Math.min(s.length, maxLen) + 1; j++) {
        if (words.has(s.substring(i, j))) {
          dp[j] = true;
        }
      }
    }
    return dp[s.length];
  }
}
