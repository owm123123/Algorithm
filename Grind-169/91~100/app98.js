//* Number of 1 Bits
// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

// Input: n = 11
// Output: 3
// Explanation:
// The input binary string 1011 has a total of three set bits.

// Input: n = 128
// Output: 1
// Explanation:
// The input binary string 10000000 has a total of one set bit.

// Input: n = 2147483645
// Output: 30
// Explanation:
// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.
// 0000 break

// * Brian Kernighan’s Algorithm
// 1101
// 1100
// count: 1

// 1100
// 1011
// count: 2

// 1000
// 0111
// count: 3

// 0000 break
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    n &= n - 1;
    count++;
  }

  return count;
};

// * 直覺的作法
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    count += n & 1;
    n >>>= 1;
  }

  return count;
};
