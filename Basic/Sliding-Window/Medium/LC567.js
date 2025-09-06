/*
* 567. Permutation in String

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

Constraints:
- 1 <= s1.length, s2.length <= 10^4
- s1 and s2 consist of lowercase English letters.

*/

class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let match = (a, b) => {
      return a.every((_, i) => a[i] === b[i]);
    };

    let aCode = 'a'.charCodeAt(0);
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
      arr1[s1[i].charCodeAt(0) - aCode]++;
      arr2[s2[i].charCodeAt(0) - aCode]++;
    }
    if (match(arr1, arr2)) return true;

    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
      arr2[s2[r].charCodeAt(0) - aCode]++;
      arr2[s2[l++].charCodeAt(0) - aCode]--;
      if (match(arr1, arr2)) return true;
    }
    return false;
  }
}
