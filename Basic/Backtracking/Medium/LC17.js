/**
 * * LeetCode 17. Letter Combinations of a Phone Number
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * Example 1:
 * Input: digits = "23"
 * Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * Example 2:
 * Input: digits = ""
 * Output: []
 *
 * Example 3:
 * Input: digits = "2"
 * Output: ["a","b","c"]
 *
 * Constraints:
 * - 0 <= digits.length <= 4
 * - digits[i] is a digit in the range ['2', '9'].
 */

// Write your solution below:
class Solution {
  /**
   * @param {string} digits
   * @return {string[]}
   */
  letterCombinations(digits) {
    let res = [];
    if (digits.length === 0) return res;
    const map = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz',
    };

    let backTrack = (idx, path) => {
      if (path.lenght === digits.length) {
        res.push([path.join('')]);
        return;
      }

      for (let c of map[digits[idx]]) {
        path.push(c);
        backTrack(idx + 1, path);
        path.pop();
      }
    };

    backTrack(0, []);

    return res;
  }
}
