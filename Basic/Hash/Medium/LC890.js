// * 890. Find and Replace Pattern
// Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
// Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

// Input: words = ["a","b","c"], pattern = "a"
// Output: ["a","b","c"]

// Constraints:
// 1 <= pattern.length <= 20
// 1 <= words.length <= 50
// words[i].length == pattern.length
// pattern and words[i] are lowercase English letters.

// * 轉數字問題 - 加後面 idx=10 沒辦法跟 idx=1, 10判斷
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let encode = (str) => {
    // "abb" → [0,1,1]，"mee" → [0,1,1]，"emm" → [0,1,1]。
    let map = new Map();
    let idx = 0;
    let arr = [];
    for (let c of str) {
      if (!map.has(c)) {
        map.set(c, idx++);
      }
      arr.push(map.get(c));
    }
    return arr.join('');
  };

  let res = [];
  let key = encode(pattern);
  for (let word of words) {
    if (word.length != pattern.length) {
      continue;
    }
    if (encode(word) === key) {
      res.push(word);
    }
  }
  return res;
};

var findAndReplacePattern = function (words, pattern) {
  function match(word, pattern) {
    let m1 = {},
      m2 = {};
    for (let i = 0; i < word.length; i++) {
      let w = word[i],
        p = pattern[i];
      if ((m1[w] && m1[w] !== p) || (m2[p] && m2[p] !== w)) return false;
      m1[w] = p;
      m2[p] = w;
    }
    return true;
  }
  return words.filter((word) => match(word, pattern));
};
