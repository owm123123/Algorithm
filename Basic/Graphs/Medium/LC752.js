/*
* 752. Open the Lock

You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each move consists of turning one wheel one slot.
* Each move consists of turning one wheel one slot.
* 每次只能轉動一格（+1 或 -1）

The lock starts at '0000', a string representing the state of the 4 wheels.

You are given a list of deadends dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.

Given a target representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.

Example 1:
Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
Output: 6
Explanation:
A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
because the wheels of the lock become stuck after the display becomes "0102".

Example 2:
Input: deadends = ["8888"], target = "0009"
Output: 1
Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

Example 3:
Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
Output: -1
Explanation: The lock starts at "0000", which is not a deadend.
However, all valid moves from "0000" result in a deadend.

Constraints:
1 <= deadends.length <= 500
deadends[i].length == 4
target.length == 4
target will not be in the list deadends.
target and deadends[i] consist of digits only.
*/

// * BFS
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let dead = new Set(deadends);
  if (dead.has('0000')) return -1;
  let visit = new Set();
  let queue = [['0000', 0]];

  while (queue.length) {
    let [val, step] = queue.shift();
    if (val === target) return step;
    for (let i = 0; i < 4; i++) {
      // * 每次只能轉動一格（+1 或 -1）
      for (let d of [-1, 1]) {
        let arr = val.split('');
        arr[i] = ((Number(arr[i]) + d + 10) % 10) + '';
        let next = arr.join('');
        if (!visit.has(next) && !dead.has(next)) {
          visit.add(next);
          queue.push([next, step + 1]);
        }
      }
    }
  }
  return -1;
};

// * 雙向 DFS (代理解)
var openLock = function (deadends, target) {
  if (target === '0000') return 0;

  let dead = new Set(deadends);
  if (dead.has('0000') || dead.has(target)) return -1;

  let start = new Set(['0000']);
  let end = new Set([target]);
  let visited = new Set(['0000', target]);
  let step = 0;

  while (start.size && end.size) {
    // 總是選擇較小的集合進行擴展
    if (start.size > end.size) {
      [start, end] = [end, start];
    }

    let nextLevel = new Set();
    step++;

    for (let curr of start) {
      for (let next of getNeighbors(curr)) {
        if (end.has(next)) return step;
        if (!dead.has(next) && !visited.has(next)) {
          visited.add(next);
          nextLevel.add(next);
        }
      }
    }
    start = nextLevel;
  }
  return -1;
};

function getNeighbors(node) {
  let neighbors = [];
  for (let i = 0; i < 4; i++) {
    for (let d of [-1, 1]) {
      let arr = node.split('');
      arr[i] = ((Number(arr[i]) + d + 10) % 10) + '';
      neighbors.push(arr.join(''));
    }
  }
  return neighbors;
}
