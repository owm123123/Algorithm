// * Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ! t is an anagram of s: 說明他們只是順序不同，不是 subString 的意思

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false
//-------------------------

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @description // * hash
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (let c of t) {
    if (!map.has(c) || map.get(c) === 0) return false;
    map.set(c, map.get(c) - 1);
  }

  return true;
};
