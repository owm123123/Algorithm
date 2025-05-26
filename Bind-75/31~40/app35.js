// * Word Break
// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.
//-------------------------
/**
 * 關鍵: 以 true 來表示切割的位置起點
 * 準備:
 *  initial: dp[0] = true
 *  wordDir: set
 *  dp: new Array(s.length + 1).fill(false);
 *  dp[0] = ture
 *
 * * 核心:
 * * for (let i = 1; i < s.length + 1; i++) {
 * *   for (let j = Math.max(0, i - maxLen); j < i; j++) {
 * *      if (dp[j] && set.has(s.slice(j, i))) { dp[i] = true; break; }
 *
 * ! 不可只使用 start 計算 => 屬於 Greedy 無法回溯!
 */
//-------------------------
// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // ! 因為這裡設定的下一個起始點是在 匹配字 的下一個，所以 +1
  let dp = new Array(s.length + 1).fill(false);
  let set = new Set(wordDict);

  // ! 減少s很大，但wordDict很少，導致無法配對，卻還在for-each的情況
  const maxLen = wordDict.reduce((max, str) => Math.max(max, str.length), 0);
  dp[0] = true;

  // ! 統一上面 s.length + 1 比較不會忘記
  for (let i = 1; i < s.length + 1; i++) {
    for (let j = Math.max(0, i - maxLen); j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  // ! 回傳檢查 s[] 下一個是否為開頭
  return dp[s.length];
};
