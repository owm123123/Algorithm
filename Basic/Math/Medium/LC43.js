/*
* 43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note:
- You must not use any built-in BigInteger library or convert the inputs to integer directly.
- The input strings are non-empty and contain only digits 0-9.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

Constraints:
- 1 <= num1.length, num2.length <= 200
- num1 and num2 consist of only digits.
- Both num1 and num2 do not contain any leading zero, except the number 0 itself.

*/

/*
* 解題思路

1. 用一個長度為 num1.length + num2.length 的陣列保存每一位的結果。
2. 兩層迴圈，從低位到高位逐位相乘，累加到正確的位置。
3. 最後處理進位，把陣列轉成字串。 

* https://medium.com/@ChYuan/leetcode-43-multiply-strings-%E5%BF%83%E5%BE%97-medium-c33e8be94919 (看那張圖)
 */

class Solution {
  /**
   * @param {string} num1
   * @param {string} num2
   * @return {string}
   */
  multiply(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    let m = num1.length,
      n = num2.length;
    let res = new Array(m + n).fill(0);
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        let temp = (num1[i] - '0') * (num2[j] - '0');
        let p1 = i + j,
          p2 = i + j + 1;
        let sum = temp + res[p2];
        res[p1] += Math.floor(sum / 10);
        res[p2] = sum % 10;
      }
    }
    let result = res.join('').replace(/^0+/, '');
    return res === '' ? '0' : result;
  }
}
