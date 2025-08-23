/**
 * * LeetCode 394. Decode String
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. k is guaranteed to be a positive integer.
 *
 * You may assume that the input string is always valid, no extra white spaces, square brackets are well-formed, etc.
 *
 * Examples:
 *
 * Example 1:
 * Input: s = "3[a]2[bc]"
 * Output: "aaabcbc"
 *
 * Example 2:
 * Input: s = "3[a2[c]]"
 * Output: "accaccacc"
 *
 * Example 3:
 * Input: s = "2[abc]3[cd]ef"
 * Output: "abcabccdcdcdef"
 *
 * Constraints:
 * - 1 <= s.length <= 30
 * - s consists of lowercase English letters, digits, and square brackets '[]'.
 * - s is guaranteed to be a valid input.
 */

class Solution {
  // 3[a2[c]]
  /**
   * @param {string} s
   * @return {string}
   */
  decodeString(s) {
    let nStack = [];
    let cStack = [];
    let num = 0;
    let curr = '';

    for (let c of s) {
      if (c >= '0' && c <= '9') {
        num = num * 10 + Number(c);
      } else if (c === '[') {
        cStack.push(curr);
        nStack.push(num);
        curr = '';
        num = 0;
      } else if (c === ']') {
        let n = nStack.pop();
        let prev = cStack.pop();
        curr = prev + curr.repeat(n);
      } else {
        curr += c;
      }
    }
    return curr;
  }
}
