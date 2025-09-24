/*
* 647. Palindromic Substrings

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 
Constraints:
1 <= s.length <= 1000
s consists of lowercase English letters.
*/

// ! Two Pointer
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  let conter = (l, r) => {
    let tmp = 0;
    while (l >= 0 && r < s.length) {
      if (s[l] !== s[r]) break;
      tmp++;
      l--;
      r++;
    }
    return tmp;
  };

  for (let i = 0; i < s.length; i++) {
    count += conter(i, i);
    if (i !== s.length - 1) {
      count += conter(i, i + 1);
    }
  }

  return count;
};

// ! DP
/**
 * @param {string} s
 * @return {number}
 */
// * 同 LC5 不過是計算 回文 總數量
var countSubstrings = function (s) {
  let n = s.length;
  let count = 0;
  let dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    count++;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      let j = i + len - 1;
      if (s[i] === s[j]) {
        if (len === 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j]) {
        count++;
      }
    }
  }

  return count++;
};
