// * 1002. Find Common Characters
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// Constraints:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 100
// words[i] consists of lowercase English letters.

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // * 因比較 Math.min, 所以用 Infinity
  let minFreq = new Array(26).fill(Infinity);
  let aCode = 'a'.charCodeAt(0);
  for (let word of words) {
    let freq = new Array(26).fill(0);
    for (let c of word) {
      freq[c.charCodeAt(0) - aCode]++;
    }
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], freq[i]);
    }
  }

  let res = [];
  for (let i = 0; i < 26; i++) {
    // * words = ["bella","label","roller"], output: ["e","l","l"] => 兩個 "l"
    for (let j = 0; j < minFreq[i]; j++) {
      res.push(String.fromCharCode(i + aCode));
    }
  }
  return res;
};

// * 每次從第一個字串取一個字母，檢查所有字串是否有，並移除
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // ["bella","label","roller"]
  const res = [];
  for (let l of words[0]) {
    if (words.every((w) => w.includes(l))) {
      res.push(l);
      words = words.map((i) => i.replace(l, ''));
    }
  }
  return res;
};
