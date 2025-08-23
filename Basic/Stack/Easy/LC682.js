/**
 * 682. Baseball Game
 *
 * You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
 *
 * At the beginning of the game, you start with an empty record. You are given a list of strings `operations`, where each string is an operation that is either an integer, "+", "D", or "C":
 *
 * - An integer x: Record a new score of x.
 * - "+": Record a new score that is the sum of the previous two scores.
 * - "D": Record a new score that is double the previous score.
 * - "C": Invalidate the previous score, removing it from the record.
 *
 * Return the sum of all the scores on the record after applying all the operations.
 *
 * Example 1:
 * Input: operations = ["5","2","C","D","+"]
 * Output: 30
 * Explanation:
 * "5" - Add 5 to the record, record is now [5].
 * "2" - Add 2 to the record, record is now [5, 2].
 * "C" - Remove the previous score, record is now [5].
 * "D" - Add double the previous score (5 * 2 = 10), record is now [5, 10].
 * "+" - Add the sum of the previous two scores (5 + 10 = 15), record is now [5, 10, 15].
 * The sum is 5 + 10 + 15 = 30.
 *
 * Constraints:
 * - 1 <= operations.length <= 1000
 * - operations[i] is "C", "D", "+", or a string representing an integer in the range [-30000, 30000].
 */

// Write your solution below:
class Solution {
  /**
   * @param {string[]} operations
   * @return {number}
   */
  calPoints(operations) {
    let stack = [];
    for (let str of operations) {
      switch (str) {
        case 'C':
          stack.pop();
          break;
        case 'D':
          let n = Number(stack[stack.length - 1]);
          stack.push(n * 2);
          break;
        case '+':
          let n1 = Number(stack[stack.length - 1]);
          let n2 = Number(stack[stack.length - 2]);
          stack.push(n1 + n2);
          break;
        default:
          stack.push(Number(str));
      }
    }
    return stack.reduce((a, b) => a + b, 0);
  }
}
