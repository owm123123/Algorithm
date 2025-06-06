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
  if (s.length != t.length) return false;
  let count = new Array(26).fill(0);
  let aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - aCharCode]++;
    count[t[i].charCodeAt(0) - aCharCode]--;
  }

  return count.every((e) => e === 0);
};
