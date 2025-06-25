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

/**
 * ! map用法 (map to array)
 * 1. [...map.values()]
 * 2. Array.from(map.values())
 * 3. [...map.entries()].map(([_, value]) => value)
 */

// Sorted
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();

  for (let str of strs) {
    // ! str 做 sort 可以不用 for-each
    const key = str.split('').sort().join();
    if (groups.has(key)) groups.get(key).push(str);
    else groups.set(key, [str]);
  }

  return [...groups.values()];
};
