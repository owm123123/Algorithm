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
 * * 太難說明了，只能勉強化畫圖了
 * ""leetcodetestexam
 * * (1.) 前面會插入一個 空字串 設定為 true 表示起點
 * new Array(s.length + 1)
 * dp[0] = true
 * * (2.) double for-each 思路
 * ""leetcodet(i)estexam
 * i = 8 位於 t
 * j = 這時候會 0 開始檢查
 * 檢查 2 點
 * 1. dp 位置是否為 true
 * 2. 是否存在 wordDict 裡面
 * * (3.) 優化
 * leeeeeettttttteeeeeeeeeeee  wordDict: test, teeee
 * 當 i 到後面時 j 不可能每次都要從 0 開始檢查吧
 * 他其實只從 wordDict 的最長值開始檢查就好
 * for(j = Math.max(0, i - wordDictMaxLen))
 *
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // ! 因為這裡設定的下一個起始點是在 匹配字 的下一個，所以 +1
  let dp = new Array(s.length + 1).fill(false);
  let set = new Set(wordDict);

  const maxLen = wordDict.reduce((max, str) => Math.max(max, str.length), 0);
  // * 空字串 為 true
  dp[0] = true;

  // ! 統一上面 s.length + 1 比較不會忘記
  for (let i = 1; i < s.length + 1; i++) {
    // * Math.max(0, i - maxLen): 當i很大時, 從 wordDict 最長的大小開始檢查 (優化)
    for (let j = Math.max(0, i - maxLen); j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        // * 設定 dp[i] = true 呼應到上面的 dp[j] 的檢查
        dp[i] = true;
        break;
      }
    }
  }

  // ! 回傳檢查 s[] 下一個是否為開頭
  return dp[s.length];
};
