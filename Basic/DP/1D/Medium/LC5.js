/*
* 5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

// ! Two Pointer O(n^2)
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let start = 0;
  let max = 0;

  let maxLength = (i, j) => {
    while (i >= 0 && j <= s.length - 1 && s[i] === s[j]) {
      i--;
      j++;
    }
    return j - i - 1;
  };

  for (let i = 0; i < s.length; i++) {
    let len1 = maxLength(i, i);
    let len2 = maxLength(i, i + 1);
    let len = Math.max(len1, len2);

    if (max < len) {
      max = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + max);
};

// ! DP O(n^2)
/* 範例 s = "babad"
* 長度為 2 的子串
  i=0, j=1: "ba" → 不同，dp[0][1]=false
  i=1, j=2: "ab" → 不同，dp[1][2]=false
  i=2, j=3: "ba" → 不同，dp[2][3]=false
  i=3, j=4: "ad" → 不同，dp[3][4]=false
* 長度為 3 的子串
  i=0, j=2: "bab" → s[0]==s[2] 且 dp[1][1]=true，所以 dp[0][2]=true
  i=1, j=3: "aba" → s[1]==s[3] 且 dp[2][2]=true，所以 dp[1][3]=true
  i=2, j=4: "bad" → s[2]!=s[4]，dp[2][4]=false
* 長度為 4、5 的子串
  都不會是回文（因為頭尾字母不同）
 */
/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let n = s.length;
  if (n < 2) return s;

  // ! maxlen 設定 1
  let maxLen = 1;
  let start = 0;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));

  // * 初始化
  for (let i = 0; i < n; i++) dp[i][i] = true;

  // * 因為跑得是 長度 所以用 <= n
  for (let len = 2; len <= n; len++) {
    // ! 注意 n - len 原因可以看上面範例就知道
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] === s[j]) {
        if (len === 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && len > maxLen) {
        start = i;
        maxLen = len;
      }
    }
  }

  return s.substring(start, start + maxLen);
}

// * Todo: Manacher's Algorithm O(n)
