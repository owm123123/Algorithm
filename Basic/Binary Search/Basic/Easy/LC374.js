/*
LeetCode 374. Guess Number Higher or Lower

You are trying to guess a number between 1 and n. The number you are trying to guess is called `pick`.

The API `int guess(int num)` is defined as follows:
- Returns -1 if `num` is higher than the picked number.
- Returns 1 if `num` is lower than the picked number.
- Returns 0 if `num` is equal to the picked number.

Write a function to guess the number.

Example:
Input: n = 10, pick = 6
Output: 6

Note:
- 1 <= n <= 2^31 - 1
- 1 <= pick <= n

*/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  guessNumber(n) {
    let left = 1,
      right = n;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (guess(mid) === 0) return mid;
      if (guess(mid) === 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
}
