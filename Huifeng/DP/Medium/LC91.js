/**
 * 91. Decode Ways
 *
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 *
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways).
 *
 * Given a non-empty string s containing only digits, return the total number of ways to decode it.
 *
 * Example 1:
 * Input: s = "12"
 * Output: 2
 * Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
 *
 * Example 2:
 * Input: s = "226"
 * Output: 3
 * Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 *
 * Example 3:
 * Input: s = "06"
 * Output: 0
 * Explanation: "06" cannot be mapped to any letter.
 *
 * Constraints:
 * - 1 <= s.length <= 100
 * - s contains only digits and may contain leading zero(s).
 */

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  // TODO: Implement your solution here
  // initial
  let n = s.length;
  // ! 因為下面有用到 i - 2 的關係 所以 dp[0] 需要設定空字串
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;

  // "12"
  for (let i = 2; i < n + 1; i++) {
    // single
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }

    // double
    let two = Number(s.substring(i - 2, i));
    if (two >= 10 && two <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
