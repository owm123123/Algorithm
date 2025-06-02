// * Sum of Two Integers
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Input: a = 1, b = 2
// Output: 3

// Input: a = 2, b = 3
// Output: 5

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * @description // ! 看不懂這題
 */
var getSum = function (a, b) {
  while (b !== 0) {
    let carry = (a & b) << 1; // 計算進位
    a = a ^ b; // 不進位的和
    b = carry; // 把進位加回去
  }
  return a;
};
