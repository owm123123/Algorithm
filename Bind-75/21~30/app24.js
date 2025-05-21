// Decode Ways
// You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

// "1" -> 'A'
// "2" -> 'B'
// ...
// "25" -> 'Y'
// "26" -> 'Z'

// However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

// For example, "11106" can be decoded into:

// "AAJF" with the grouping (1, 1, 10, 6)
// "KJF" with the grouping (11, 10, 6)
// The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
// Note: there may be strings that are impossible to decode.

// Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

// The test cases are generated so that the answer fits in a 32-bit integer.

// Input: s = "12"
// Output: 2
// Explanation:
// "12" could be decoded as "AB" (1 2) or "L" (12).

// Input: s = "226"
// Output: 3
// Explanation:
// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Input: s = "06"
// Output: 0
// Explanation:
// "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.

// ---------------------------------------------------------

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length;

  if (n === 0 || s[0] === '0') return 0;

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // 空字串有 1 種解碼方式
  dp[1] = s[0] !== '0' ? 1 : 0; // 第一個字符是否有效

  for (let i = 2; i <= n; i++) {
    // 單字符
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }

    // 雙字符
    const twoDigit = parseInt(s.substring(i - 2, i), 10);
    if ((twoDigit >= 10) & (twoDigit <= 26)) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
