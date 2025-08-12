/**
 * 1071. Greatest Common Divisor of Strings
 *
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 * A string x divides string s if and only if s = x + x + ... + x (i.e., x is concatenated with itself one or more times).
 *
 * Example 1:
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 *
 * Example 2:
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 *
 * Example 3:
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 *
 * Constraints:
 * - 1 <= str1.length, str2.length <= 1000
 * - str1 and str2 consist of English uppercase letters.
 */

// Write your solution here:
// ! gcd 最大公因數
// ! 不能轉數字, 會破壞原本的結構
function gcdOfStrings(str1, str2) {
  // TODO: Implement the function
  // * 拼接判斷
  if (str1 + str2 !== str2 + str1) return '';

  // * 最大公因數
  let gcd = (a, b) => {
    return b === 0 ? a : gcd(b, gcd(b, a % b));
  };
  const g = gcd(str1.length, str2.length);

  return str1.slice(0, g);
}
