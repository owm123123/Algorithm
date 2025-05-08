// Group Anagrams
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
// ---------------------------------------------------------

// ----------------------------------------------------------

// Sorted
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();

  for (let str of strs) {
    // 用 sort 取代 charCodeAt
    const key = str.split('').sort().join();
    if (groups.has(key)) groups.get(key).push(str);
    else groups.set(key, [str]);
  }

  return [...groups.values()];
};

// Array + charCodeAt
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();

  for (let str of strs) {
    // 建立字母計數器
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // 將字母計數器轉為鍵
    const key = count.join('#'); // 用 '#' 分隔，避免數字連接混淆
    if (groups.has(key)) {
      groups.get(key).push(str);
    } else {
      groups.set(key, [str]);
    }
  }

  return [...groups.values()];
};
