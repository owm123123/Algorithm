// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Input: s = "cbbd"
// Output: "bb"

// ---------------------------------------------------

// Palindrome Substring 回文子字串
// 回文是正著讀和反著讀都相同的字串。
// "aba" 是回文。
// "abba" 是回文。
// "abc" 不是回文。

// 重疊子問題: 如果一個字串是回文，那麼它的子字串也必須是回文。

// 最優子結構:
// 如果知道子字串 s[i+1:j-1] 是回文，且 s[i] === s[j]，那麼 s[i:j] 也是回文。
// 這種遞推關係可以用來構建動態規劃的狀態轉移方程。

// duup
function duup(s) {}
