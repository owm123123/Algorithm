/*
* 28. Find the Index of the First Occurrence in a String

Given two strings `haystack` and `needle`, return the index of the first occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

Constraints:
- 1 <= haystack.length, needle.length <= 10^4
- haystack and needle consist of only lowercase English characters.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 0 - 3
// 8 5
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

var strStr = function (haystack, needle) {
  let len1 = haystack.length;
  let len2 = needle.length;
  if (len1 < len2) return -1;

  for (let i = 0; i <= len1 - len2; i++) {
    let j = i;
    let idx = 0;
    while (haystack[j] === needle[idx]) {
      if (idx === len2 - 1) {
        return i;
      }
      j++;
      idx++;
    }
  }
  return -1;
};
