/**
 * 752. Open the Lock
 *
 * You have a lock in front of you with 4 circular wheels. Each wheel has 10 digits: '0' to '9'.
 * The wheels can be rotated freely: each digit can be turned to the next or previous digit, wrapping around from '9' to '0' and vice versa.
 *
 * The lock initially starts at '0000', a string representing the state of the 4 wheels.
 *
 * You are given a list of deadends, meaning if the lock displays any of these codes, the wheels will stop turning and you cannot proceed.
 *
 * You are also given a target code, and you want to open the lock by turning the wheels until the lock displays the target code.
 *
 * Return the minimum total number of turns required to open the lock, or -1 if it is impossible.
 *
 * Example 1:
 * Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * Output: 6
 *
 * Example 2:
 * Input: deadends = ["8888"], target = "0009"
 * Output: 1
 *
 * Example 3:
 * Input: deadends = ["0000"], target = "8888"
 * Output: -1
 *
 * Constraints:
 * - 1 <= deadends.length <= 500
 * - deadends[i].length == 4
 * - target.length == 4
 * - target will not be in the list deadends.
 * - target and deadends[i] consist of digits only.
 */

// Write your solution here:
// * BFS
class Solution {
  /**
   * @param {string[]} deadends
   * @param {string} target
   * @return {number}
   */
  // Input: deadends = ["0201","0101","0102","1212","2002"]
  // target = "0202"
  openLock(deadends, target) {
    // ! deadends 轉 Set 效率比較高
    let dead = new Set(deadends);
    if (dead.has('0000')) return -1;

    let queue = [['0000', 0]];
    // ! 需記錄哪些數字出現過
    let visited = new Set(['0000']);

    while (queue.length) {
      let [word, count] = queue.shift();
      if (word === target) return count;
      for (let i = 0; i < 4; i++) {
        for (let d of [-1, 1]) {
          let arr = word.split('');
          arr[i] = ((Number(arr[i]) + d + 10) % 10) + '';
        }
        let next = arr.join('');
        if (!dead.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.pysh([next], count + 1);
        }
      }
    }
    return -1;
  }
}
