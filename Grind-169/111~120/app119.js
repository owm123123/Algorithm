// * Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Input: x = 2.10000, n = 3
// Output: 9.26100

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Constraints:
// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) {
    return 1.0;
  } else if (n === 1) {
    return x;
  } else if (n < 0) {
    /**
     * * x^(-n) = 1 / (x^n)
     * * 例如 2^(-3) = 1 / (2^3) = 1/8
     * * 所以當 n < 0 時，把問題轉成計算正整數次方，再取倒數即可
     * * 也就是：myPow(x, -n) = 1 / myPow(x, n)，但為了統一遞迴結構，直接把 x 換成 1/x，n 換成 -n
     */
    return myPow(1 / x, -n);
  }
  /**
   * * n & 1 說明 n 是奇數
   * * 假設 n 是奇數，n = 2k + 1
   * * 則 xⁿ = x^(2k+1) = x * (x^k) * (x^k) = x * (x*x)^(k)
   *
   * * 假設 n 是偶數，n = 2k
   * * 則 xⁿ = x^(2k) = (x^k) * (x^k) = (x*x)^(n/2)
   */
  if (n & 1) {
    return x * myPow(x * x, Math.floor(n / 2));
  } else {
    return myPow(x * x, Math.floor(n / 2));
  }
};
