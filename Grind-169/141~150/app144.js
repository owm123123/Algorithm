// * Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return '';

  let need = {};
  for (let c of t) {
    need[c] = (need[c] || 0) + 1;
  }

  let l = 0;
  let r = 0;
  let count = t.length; // * 需要匹配的總字元數
  let minLen = Infinity;
  let start = 0;

  while (r < s.length) {
    // * 擴大右邊界
    if (need[s[r]] > 0) count--;
    need[s[r]] = (need[s[r]] || 0) - 1;
    r++;

    // * 當所有字元都匹配時，嘗試縮小左邊界
    while (count === 0) {
      // * 這種 sliding window 寫法，視窗長度就是 right - left，不用加 1。
      // ! 因為上面已經做了 right++，所以不用 + 1
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }
      need[s[l]]++;
      if (need[s[l]] > 0) count++;
      l++;
    }
  }

  // * 你記錄的 minLen 就是"視窗長度"（right - left），所以 start + minLen 剛好是右邊界。
  return minLen === Infinity ? '' : s.slice(start, start + minLen);
};
