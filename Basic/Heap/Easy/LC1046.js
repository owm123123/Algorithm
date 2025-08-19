/**
 * Leetcode 1046. Last Stone Weight
 *
 * You are given an array of integers stones where stones[i] is the weight of the i-th stone.
 *
 * We are playing a game with the stones. On each turn, we choose the two heaviest stones and smash them together.
 * Suppose the heaviest stones have weights x and y with x <= y. The result of this smash is:
 *   - If x == y, both stones are destroyed.
 *   - If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 *
 * At the end, there is at most one stone left. Return the weight of the last remaining stone. If there are no stones left, return 0.
 *
 * Example 1:
 * Input: stones = [2,7,4,1,8,1]
 * Output: 1
 * Explanation:
 *   - Smash 7 and 8 => stones = [2,4,1,1,1]
 *   - Smash 4 and 2 => stones = [2,1,1,1]
 *   - Smash 2 and 1 => stones = [1,1,1]
 *   - Smash 1 and 1 => stones = [1]
 *   - Only one stone left, answer is 1.
 *
 * Example 2:
 * Input: stones = [1]
 * Output: 1
 *
 * Constraints:
 * - 1 <= stones.length <= 30
 * - 1 <= stones[i] <= 1000
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // TODO: Write your code here
  const maxMQ = new MaxPriorityQueue();

  for (let stone of stones) {
    maxMQ.enqueue(stone);
  }

  while (maxMQ.size() > 1) {
    let temp1 = maxMQ.dequeue();
    let temp2 = maxMQ.dequeue();

    if (temp1 !== temp2) {
      maxMQ.enqueue(temp1 - temp2);
    }
  }

  return maxMQ.size() === 0 ? 0 : maxMQ.dequeue();
};
