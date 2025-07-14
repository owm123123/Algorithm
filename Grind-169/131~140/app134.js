//* Reverse Bits
// Reverse bits of a given 32 bits unsigned integer.
// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

/**
 * ! bit 基本操作
 * * <<
 * * n << 1: 二進位全部往左移一位，右邊補 0
 * * n << k： 左移 k 位，相當於乘 2 的 k 次方
 * * res << -1 (X) 左移位數必須是正整數
 *
 * * >>>
 * * n >>>= 1: n 的二進位全部往右移一位，左邊補 0（無符號右移）
 * * 1000 >>> 1 變成 0100 (不管 n 是正數還是負數，左邊都補 0)
 *
 * * >>=
 * * n >>= 1 (帶符號右移)
 * * n 是負數，左邊會補 1,  是正數，左邊補 0
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // * 不要被那個數字騙，他其實只要考你轉換
  // ! 964176192 -> 可以不看
  // * 00000010100101000001111010011100
  // * 00111001011110000010100101000000

  let resp = 0;

  for (let i = 0; i < 32; i++) {
    resp = (resp << 1) | (n & 1);
    n >>>= 1; // 等同 n = n >>> 1;
  }

  // ! 左邊全部補0,確保為 正數
  return resp >>> 0;
};
