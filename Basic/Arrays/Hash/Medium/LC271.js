/**
 * 271. Encode and Decode Strings
 *
 * Design an algorithm to encode a list of strings to a single string.
 * The encoded string is then decoded back to the original list of strings.
 *
 * Implement the following two methods:
 *
 * - encode(strs): Encodes a list of strings to a single string.
 * - decode(s): Decodes a single string to a list of strings.
 *
 * Example:
 * Input: ["lint","code","love","you"]
 * Output: ["lint","code","love","you"]
 *
 * Note:
 * - The input string list may contain empty strings.
 * - Do not use any built-in serialization functions (like JSON.stringify).
 */

// Write your code here:

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  // 4#neet4#code...
  encode(strs) {
    return strs.map((s) => `${s.length}#${s}`).join('');
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  // 4#neet4#code...
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') j++;
      let len = parseInt(str.slice(i, j));
      res.push(str.slice(j + 1, j + 1 + len));
      i = j + 1 + len;
    }
    return res;
  }
}
