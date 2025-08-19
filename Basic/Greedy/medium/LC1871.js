/**
 * LeetCode 1871. Jump Game VII
 *
 * You are given a 0-indexed binary string s and two integers minJump and maxJump.
 * In the beginning, you are standing at index 0, which is always '0'.
 * You can move from index i to index j if:
 *   - i + minJump <= j <= min(i + maxJump, s.length - 1), and
 *   - s[j] == '0'
 *
 * Return true if you can reach index s.length - 1 in s, or false otherwise.
 *
 * Example 1:
 * Input: s = "011010", minJump = 2, maxJump = 3
 * Output: true
 * Explanation:
 * In the first step, move from index 0 to index 3.
 * In the second step, move from index 3 to index 5.
 *
 * Example 2:
 * Input: s = "01101110", minJump = 2, maxJump = 3
 * Output: false
 *
 * Constraints:
 * - 2 <= s.length <= 10^5
 * - s[i] is either '0' or '1'
 * - s[0] == '0'
 * - 1 <= minJump <= maxJump < s.length
 */

class Solution {
  /**
   * @param {string} s
   * @param {number} minJump
   * @param {number} maxJump
   * @return {boolean}
   */
  canReach(s, minJump, maxJump) {
    let n = s.length;
    let queue = [0];
    // * curr: 記錄目前已經處理到的最遠位置
    let curr = 0;
    let visited = new Array(n).fill(false);
    visited[0] = true;
    while (queue.length) {
      let i = queue.shift();
      for (
        let j = Math.max(i + minJump, curr);
        j <= Math.min(i + maxJump, n - 1);
        j++
      ) {
        if (s[j] === '0' && !visited[j]) {
          if (j === n - 1) return true;
          queue.push(j);
          visited[j] = true;
        }
      }
      curr = Math.max(curr, i + maxJump);
    }
    return false;
  }
}
