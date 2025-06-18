// * Word Break II
// * 影片: https://www.youtube.com/watch?v=JqOIRBC0_9c
// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  // * key: 目前 DFS 遞迴到的字串起始位置 (start)
  // * value: 從這個起點開始，所有可能的切割組合 (res)
  let memo = new Map();

  let dfs = (start) => {
    if (memo.has(start)) return memo.get(start);
    if (start === s.length) return [''];

    let res = [];
    // ! 注意 end <= s.length
    for (let end = start + 1; end <= s.length; end++) {
      let word = s.slice(start, end);
      if (set.has(word)) {
        let subs = dfs(end);
        for (let sub of subs) {
          // ! 是' '，不是 ''
          res.push(word + (sub ? ' ' + sub : ''));
        }
      }
    }
    memo.set(start, res);
    return res;
  };

  return dfs(0);
};

// Todo: 還有一個 DP 的解法
