/*
* 443. String Compression

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:
  - If the group's length is 1, append the character to s.
  - Otherwise, append the character followed by the group's length.

The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths greater than 9 will be split into multiple characters.

* After you are done modifying the input array in-place, return the new length of the array.

You must write an algorithm that uses only constant extra space.

Example 1:
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Example 2:
Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]

Example 3:
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"]

Constraints:
- 1 <= chars.length <= 2000
- chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
*/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let idx = 0;
  let l = 0;

  for (let r = 0; r <= chars.length; r++) {
    // * r === chars.length: 考慮最後一個字 也要做 push
    if (r === chars.length || chars[r] != chars[l]) {
      chars[idx++] = chars[l];

      // * "a", "a", "b" 是到 "b" 才做計算 所以是 r - l
      let count = r - l;
      if (count > 1) {
        for (let digit of count.toString()) {
          chars[idx++] = digit;
        }
      }
      l = r;
    }
  }
  return idx;
};
