// * Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Input: strs = [""]
// Output: [[""]]

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    let key = str.split('').sort().join('');
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return [...map.values()];
};
