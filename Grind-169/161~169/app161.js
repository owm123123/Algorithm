// * Alien Dictionary
// ! Alien Dictionary 外星字典，推斷字母順序。
// There is a foreign language which uses the latin alphabet, but the order among letters is not "a", "b", "c" ... "z" as in English.
// You receive a list of non-empty strings words from the dictionary, where the words are sorted lexicographically based on the rules of this new language.
// ! lexicographically 字典序，類似英文單字排序規則
// Derive the order of letters in this language. If the order is invalid, return an empty string. If there are multiple valid order of letters, return any of them.
// A string a is lexicographically smaller than a string b if either of the following is true:
// The first letter where they differ is smaller in a than in b.
// There is no index i such that a[i] != b[i] and a.length < b.length.

// Input: ["z","o"]
// Output: "zo"
// Explanation:
// From "z" and "o", we know 'z' < 'o', so return "zo".

// Input: ["hrn","hrf","er","enn","rfnn"]
// Output: "hernf"

// Explanation:
// from "hrn" and "hrf", we know 'n' < 'f'
// from "hrf" and "er", we know 'h' < 'e'
// from "er" and "enn", we know get 'r' < 'n'
// from "enn" and "rfnn" we know 'e'<'r'
// so one possibile solution is "hernf"

// Constraints:
// The input words will contain characters only from lowercase 'a' to 'z'.
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100

/**
 * ! Topological Sort 拓撲排序，解決有向無環圖（DAG）中節點排序問題。
 */

class Solution {
  /**
   * @param {string[]} words
   * @returns {string}
   * @description // * Topological Sort + graph
   */
  foreignDictionary(words) {
    // consstruction
    // ! 記得用 object 不要用 array
    const graph = {};
    const indegree = {};
    for (let word of words) {
      for (let c of word) {
        graph[c] = graph[c] || new Set();
        indegree[c] = indegree[c] || 0;
      }
    }

    // build direct graph
    // ! 因為 w2 為 i + 1 的關係: length - 1
    for (let i = 0; i < words.length - 1; i++) {
      const w1 = words[i];
      const w2 = words[i + 1];
      const minLen = Math.min(w1.length, w2.length);
      let found = false;
      for (let j = 0; j < minLen; j++) {
        if (w1[j] != w2[j]) {
          found = true;
          // ! 這裡還需檢查 graph[w1[j]] 是否已經存在 w2[j]
          if (!graph[w1[j]].has(w2[j])) {
            // ! set 用 add， map 用 set
            graph[w1[j]].add(w2[j]);
            indegree[w2[j]]++;
          }
          break;
        }
      }

      // * 特殊情況：["abc", "ab"] 非法，但["ab", "abc"] 是合法的喔
      if (!found && w1.length > w2.length) return '';
    }

    // topological sort
    let queue = [];
    // * c 表示目前要處理的 字元(character)
    // ! object 用 in 取 key
    for (let c in indegree) {
      if (indegree[c] === 0) {
        queue.push(c);
      }
    }
    let result = '';
    while (queue.length) {
      const c = queue.shift();
      result += c;
      // ! set 用 of
      for (let nei of graph[c]) {
        indegree[nei]--;
        if (indegree[nei] === 0) queue.push(nei);
      }
    }

    // * 需檢查有沒有 cycle，有會出現矛盾得現象
    return result.length === Object.keys(indegree).length ? result : '';
  }
}
