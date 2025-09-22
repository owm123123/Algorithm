/*
* 953. Verifying an Alien Dictionary

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then the sequence is not sorted.

Example 3:
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, but the first word is longer, so the sequence is not sorted.

Constraints:
- 1 <= words.length <= 100
- 1 <= words[i].length <= 20
- order.length == 26
- All characters in words[i] and order are English lowercase letters.

*/

/*
 * 題意 (Example 2)
題目: words = ["word","world","row"], 
     order = "worldabcefghijkmnpqstuvxyz"

compare("word", "world"):
位置 0: 'w' vs 'w' → 相同，繼續
位置 1: 'o' vs 'o' → 相同，繼續  
位置 2: 'r' vs 'r' → 相同，繼續
位置 3: 'd' vs 'l' → 不同！

'd' 在外星字典中的位置 = 4
'l' 在外星字典中的位置 = 3

return 4 - 3 = 1 (正數)
 */

// * 好理解
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // 映射字母順序
  let orderMap = {};
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }

  let isInOrder = (w1, w2) => {
    let i = 0;
    while (i < w1.length && i < w2.length) {
      if (orderMap[w1[i]] < orderMap[w2[i]]) return true;
      if (orderMap[w1[i]] > orderMap[w2[i]]) return false;
      i++;
    }

    // 所有比較的字元都相同，短的應該在前面
    return w1.length <= w2.length;
  };

  // 比較單字
  for (let i = 0; i < words.length - 1; i++) {
    if (!isInOrder(words[i], words[i + 1])) {
      return false;
    }
  }
  return true;
};

// * Sorting
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  // 建立字母順序映射表 orderIdx[orgin] = curr
  let orderIdx = new Array(26).fill(0);
  for (let i = 0; i < order.length; i++) {
    orderIdx[order.charCodeAt(i) - 97] = i;
  }

  const compare = (w1, w2) => {
    for (let i = 0; i < Math.min(w1.length, w2.length); i++) {
      if (w1[i] !== w2[i]) {
        return (
          orderIdx[w1.charCodeAt(i) - 97] - orderIdx[w2.charCodeAt(i) - 97]
        );
      }
    }
    return w1.length - w2.length;
  };

  let sortedWords = [...words].sort(compare);
  return words.join() === sortedWords.join();
};
