/*
* 66. Plus One

Given a large integer represented as an array of digits, where each element in the array contains a single digit of the number (with the most significant digit at the front), increment the integer by one and return the resulting array of digits.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123. Incrementing by one gives 124.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321. Incrementing by one gives 4322.

Example 3:
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9. Incrementing by one gives 10.

Constraints:
- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Input: digits = [1,2,3]
// Output: [1,2,4]

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
