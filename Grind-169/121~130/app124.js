// * Decode Ways
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

// * 範例
// 以 1101 為例，dp 狀態如下：
// i=1: s[0]='1'，不是 '0'，dp[1]=1
// i=2: s[1]='1'，不是 '0'，dp[2]+=dp[1]=1；s[0,1]='11'，在 10~26，dp[2]+=dp[0]=1，dp[2]=2
// i=3: s[2]='0'，是 '0'，不能單獨解碼；s[1,2]='10'，在 10~26，dp[3]+=dp[1]=1，dp[3]=1
// i=4: s[3]='1'，不是 '0'，dp[4]+=dp[3]=1；s[2,3]='01'，不是合法兩位數（因為不能有前導 0），所以不加

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length;

  if (n === 0 || s[0] === '0') return 0;

  // ! 注意 dp[0] 表示空字串, 表示 dp[1] 才是第一個字
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // !空字串有 1 種解碼方式
  dp[1] = s[0] !== '0' ? 1 : 0; // *第一個字符是否有效

  for (let i = 2; i < n + 1; i++) {
    // 單字符
    // * 檢查當前樹是否為0
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }

    // 雙字符
    const two = parseInt(s.substring(i - 2, i), 10);
    if ((two >= 10) & (two <= 26)) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
