// * 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ! t is an anagram of s: 說明他們只是 "順序不同, 字母相同" ，不是 subString 的意思

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    cnt[s.charCodeAt(i) - 97]++;
    cnt[t.charCodeAt(i) - 97]--;
  }
  for (let v of cnt) {
    if (v !== 0) return false;
  }
  return true;
};
