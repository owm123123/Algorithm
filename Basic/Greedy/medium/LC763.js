// 763. Partition Labels

// Given a string s, partition it into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

// Example:
// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]

// Constraints:
// - 1 <= s.length <= 500
// - s consists of lowercase English letters.

// Write your solution below:
// *　只關心每個字母的最後一次出現，確保這個區段內所有字母都不會在後面再出現，這樣就能安全分割。
class Solution {
  /**
   * @param {string} s
   * @return {number[]}
   */
  partitionLabels(s) {
    let last = {};
    for (let i = 0; i < s.length; i++) {
      last[s[i]] = i;
    }

    let res = [];
    let left = 0;
    let right = 0;

    for (let i = 0; i < s.length; i++) {
      // * 核心
      right = Math.max(right, last[s[i]]);

      // 可切割
      if (right === i) {
        res.push(right - left + 1);
        left = i + 1;
      }
    }
    return res;
  }
}
