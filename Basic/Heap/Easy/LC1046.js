/*
* 1046. Last Stone Weight

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the two heaviest stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed.
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0. 

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1].
We combine 2 and 4 to get 2 so the array converts to [2,1,1,1].
We combine 2 and 1 to get 1 so the array converts to [1,1,1].
We combine 1 and 1 to get 0 so the array converts to [1].
This is the value of the last stone.

Example 2:
Input: stones = [1]
Output: 1
 
Constraints:
1 <= stones.length <= 30
1 <= stones[i] <= 1000
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let heap = new MaxPriorityQueue();
  for (let i of stones) {
    heap.enqueue(i);
  }

  while (heap.size() !== 1) {
    let r1 = heap.dequeue();
    let r2 = heap.dequeue();
    heap.enqueue(Math.abs(r1 - r2));
  }

  return heap.front();
};
