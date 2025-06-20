// * Add Binary
// Given two binary strings a and b, return their sum as a binary string.

// Input: a = "11", b = "1"
// Output: "100"

// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let lenA = a.length - 1;
  let lenB = b.length - 1;
  let carry = 0;
  let res = '';

  // * while(carry) = while(carry != 0) if carry is int
  while (lenA >= 0 || lenB >= 0 || carry) {
    let sum = carry;
    /**
     * * sum += Number(a[lenA--]);
     * * 相當於
     * * sum += Number(a[lenA]);
     * * lenA--;
     */
    // ! 因為 a,b 是字串 所以轉 Number
    // ! 記得檢查
    if (lenA >= 0) sum += Number(a[lenA--]);
    if (lenB >= 0) sum += Number(b[lenB--]);
    // ! 數字要記得是往前加
    res = (sum % 2) + res;
    carry = Math.floor(sum / 2);
  }

  return res;
};
