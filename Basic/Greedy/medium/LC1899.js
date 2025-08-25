/*
* 1899. Merge Triplets to Form Target Triplet

Given a list of triplets, where each triplet is an array of three integers [a, b, c], and a target triplet [x, y, z], you can perform the following operation any number of times (possibly zero):

- Choose two distinct triplets and merge them by taking the maximum value at each position to form a new triplet.

Return true if it is possible to form the target triplet [x, y, z] by merging triplets from the list. Otherwise, return false.

Example:
Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
Output: true

Constraints:
- 1 <= triplets.length <= 10^5
- 1 <= a, b, c, x, y, z <= 1000
*/

/*
* 範例
* triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
* 只考慮每個元素都 ≤ target 的 triplet：
[2,5,3]：2 ≤ 2, 5 ≤ 7, 3 ≤ 5 → 合格
[1,8,4]：8 > 7，不合格
[1,7,5]：1 ≤ 2, 7 ≤ 7, 5 ≤ 5 → 合格

* 檢查能否覆蓋 target 的三個位置：
[2,5,3]：有 2（覆蓋 target[0]），有 5（但不是 target[1]），有 3（不是 target[2]）
[1,7,5]：有 1（不是 target[0]），有 7（覆蓋 target[1]），有 5（覆蓋 target[2]）

* 合併後能得到 target 嗎？
取 [2,5,3] 的第一個位置（2），
取 [1,7,5] 的第二個位置（7）和第三個位置（5），
合併最大值後得到 [2,7,5]。
*/

// Write your solution below:
class Solution {
  /**
   * @param {number[][]} triplets
   * @param {number[]} target
   * @return {boolean}
   */
  mergeTriplets(triplets, target) {
    // * Greedy: 只要能分別覆蓋三個位置即可，不用真的合成。
    let a = false,
      b = false,
      c = false;
    for (let t of triplets) {
      if (t[0] <= target[0] && t[1] <= target[1] && t[2] <= target[2]) {
        if (t[0] === target[0]) a = true;
        if (t[1] === target[1]) b = true;
        if (t[2] === target[2]) c = true;
      }
    }
    return a && b && c;
  }
}
