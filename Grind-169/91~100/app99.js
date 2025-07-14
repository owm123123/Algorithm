// * Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

/**
 * * JS 技巧
 * ! indexOf 也可以找字串
 * * "flower".indexOf("flo") // 回傳 0，因為 "flo" 在開頭
 * * "flower".indexOf("ow")  // 回傳 2
 * * "flower".indexOf("abc") // 回傳 -1
 *
 * ! slice(0, -1) 從 index 0 開始，切到倒數第1個字元（不包含最後一個字元）
 * * let prefix = "flower";
 * * prefix = prefix.slice(0, -1); // "flowe"
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return '';
    }
  }
  return prefix;
};
