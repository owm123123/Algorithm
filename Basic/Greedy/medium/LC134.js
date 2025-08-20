// * Gas Station
// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
// * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station.
// * 關鍵：每站能加油，開到下一站會消耗油

// * You begin the journey with an empty tank at one of the gas stations.
// * 關鍵：油箱初始為 0

// * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
// * 關鍵：能繞一圈就回傳起點 index，否則回傳 -1

// * If there exists a solution, it is guaranteed to be unique.
// * 關鍵：有解時只有一個唯一解

// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.

// Input: gas = [2,3,4], cost = [3,4,3]
// Output: -1
// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.

// Constraints:
// n == gas.length == cost.length
// 1 <= n <= 105
// 0 <= gas[i], cost[i] <= 104
// The input is generated such that the answer is unique.

class Solution {
  /**
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    let g = gas.reduce((a, b) => a + b, 0);
    let c = cost.reduce((a, b) => a + b, 0);
    if (g < c) return -1;

    // 如果 g >= c 的話 表示一定有值
    let res = 0;
    let total = 0;
    for (let i = 0; i < gas.length; i++) {
      total += gas[i] - cost[i];
      if (total < 0) {
        total = 0;
        res = i + 1;
      }
    }
    return res;
  }
}
