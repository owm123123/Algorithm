// * Find All Anagrams in a String
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:
// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  if (s.length < p.length) return res;
  let aCode = 'a'.charCodeAt(0);

  // ! 不藥用join，講求效率的話
  function isEqual(a, b) {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // * 只處理小寫英文字母，用以下方式比較快
  let pCount = new Array(26).fill(0);
  let sCount = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - aCode]++;
    sCount[s.charCodeAt(i) - aCode]++;
  }

  if (isEqual(pCount, sCount)) res.push(0);

  for (let i = p.length; i < s.length; i++) {
    sCount[s.charCodeAt(i) - aCode]++;
    // ! 注意如何取到前一個 i 的
    sCount[s.charCodeAt(i - p.length) - aCode]--;
    if (isEqual(pCount, sCount)) res.push(i - p.length + 1);
  }
  return res;
};
