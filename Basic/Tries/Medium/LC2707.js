/*
* LeetCode 2707. Extra Characters in a String

You are given a string s and a dictionary of strings dictionary. You want to break s into a sequence of dictionary words such that the number of extra characters left over in s after breaking is minimized.

Return the minimum number of extra characters left over after breaking s.

Example 1:
Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
Output: 1
Explanation: Break "leetscode" as ["leet", "scode"]. There is 1 extra character "s".

Example 2:
Input: s = "sayhelloworld", dictionary = ["hello","world"]
Output: 3
Explanation: Break "sayhelloworld" as ["say", "hello", "world"]. There are 3 extra characters "say".

Constraints:
- 1 <= s.length <= 50
- 1 <= dictionary.length <= 50
- 1 <= dictionary[i].length <= 50
- s and dictionary[i] consist of only lowercase English letters.
*/

/*
* 139. Word Break VS 2707. Extra Characters in a String
! 139 只問「能不能完全分割成字典單字」, 所以 DP + Set 就很夠用
! 2707. 找「最少剩下多少沒被覆蓋的字元」,用 Trie 能加速所有可能的匹配，減少重複比對。
* 思路都是 設定 i 為起點 跑 s[i...j] 可以匹配的數量, 可參考 139
*/

/*
* 作法說明
* i = 0
預設 dp[1] = dp[0] + 1 = 1
Trie 匹配 "l" → "le" → "lee" → "leet"（j=3，找到 "leet"，更新 dp[4] = min(dp[4], dp[0]) = 0）
Trie 繼續匹配 "leetscode"（j=8，找到 "leetcode"，更新 dp[9] = min(dp[9], dp[0]) = 0）

* i = 1, 2, 3
都沒找到字典單字，dp[i+1] = dp[i] + 1

* i = 4
預設 dp[5] = dp[4] + 1 = 1
Trie 匹配 "s" → "sc" → "sco" → "scod" → "scode"（j=8，找到 "code"，更新 dp[9] = min(dp[9], dp[4]) = 0）
其他 i

! 沒有字典單字匹配，dp[i+1] = dp[i] + 1
*/
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.isWord = true;
  }
}

class Solution {
  /**
   * @param {string} s
   * @param {string[]} dictionary
   * @return {number}
   */
  minExtraChar(s, dictionary) {
    // * DP: 到第 i 位字母沒被覆蓋的數量
    let n = s.length;
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    // create Trie
    let trie = new Trie();
    for (let word of dictionary) trie.insert(word);

    for (let i = 0; i < n; i++) {
      dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);

      // 用 Trie 匹配 s[i...j]
      let node = trie.root;
      for (let j = i; j < n; j++) {
        let c = s[j];
        if (!node.children[c]) break;
        node = node.children[c];
        if (node.isWord) {
          dp[j + 1] = Math.min(dp[j + 1], dp[i]);
        }
      }
    }
    return dp[n];
  }
}
