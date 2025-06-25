// * Roman to Integer
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// * 羅馬數字通常從大到小排列，但遇到「小的在大的左邊」時，要做減法。
// * 明確列出哪些情況要做減法（I 在 V/X 前、X 在 L/C 前、C 在 D/M 前）。
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

/**
 * * 解法:
 * * 從左到右遍歷字串
 * * 如果當前字母的值 < 下一個字母的值，則減去當前值
 * * 否則加上當前值
 */
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    // ! 最後一個不需要比較
    if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
      res -= map[s[i]];
    } else {
      res += map[s[i]];
    }
  }

  return res;
};
