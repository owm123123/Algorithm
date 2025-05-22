// Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
//-------------------------

/**
 * 關鍵: 以 true 來表示切割的位置起點
 * 準備:
 *  initial: dp[0] = true
 *  wordDir: set
 *  dp: new Array(s.length + 1).fill(false);
 * 核心:
 *  for i in s.length
 *    for word in wordDir
 *      if(dp[i] && word === s.substring(i, i + word.length))
 *        dp[i + word.length] = true
 *
 *  return dp[s.length]
 */

//-------------------------

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i < s.length; i++) {
    for (let word of wordDict) {
      if (dp[i] && s.substring(i, i + word.length) == word) {
        dp[i + word.length] = true;
      }
    }
  }
  return dp[s.length];
};

//-------------------------
// Best 100%
var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  const maxWordLen = Math.max(...wordDict.map((word) => word.length)); // 字典中單詞的最大長度

  for (let i = 1; i <= s.length; i++) {
    for (let j = Math.max(0, i - maxWordLen); j < i; j++) {
      // 只檢查長度不超過 maxWordLen 的子字串
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
