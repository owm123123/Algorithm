/*
953. Verifying an Alien Dictionary

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

// Write your function here:
function isAlienSorted(words, order) {}

// * Sorting
class Solution {
  /**
   * @param {string[]} words
   * @param {string} order
   * @return {boolean}
   */
  isAlienSorted(words, order) {
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
  }
}
