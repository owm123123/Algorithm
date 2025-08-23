/*
* LeetCode 1768. Merge Strings Alternately

Given two strings word1 and word2, merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"

Example 2:
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"

Example 3:
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"

Constraints:
- 1 <= word1.length, word2.length <= 100
- word1 and word2 consist of lowercase English letters.

*/

// Write your solution here:
class Solution {
  /**
   * @param {string} word1
   * @param {string} word2
   * @return {string}
   */
  mergeAlternately(word1, word2) {
    let len = Math.min(word1.length, word2.length);
    let res = '';
    for (let i = 0; i < len; i++) {
      res = res + word1[i];
      res = res + word2[i];
    }
    if (word1.length < word2.length) {
      res = res + word2.slice(len);
    } else {
      res = res + word1.slice(len);
    }
    return res;
  }
}
