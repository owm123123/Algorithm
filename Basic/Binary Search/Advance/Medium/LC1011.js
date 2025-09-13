/*

* 1011. Capacity To Ship Packages Within D Days

A conveyor belt has packages that must be shipped from one port to another within `days` days.

The `i`-th package on the conveyor belt has a weight of `weights[i]`. Each day, you can ship packages in the order given by `weights`. You may not split packages.

Return the least weight capacity of the ship that will result in all the packages being shipped within `days` days.
* 每一天只能裝連續的一段包裹。

Example 1:
Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15
Explanation: A ship capacity of 15 is the minimum to ship all packages in 5 days.

Example 2:
Input: weights = [3,2,2,4,1,4], days = 3
Output: 6

Example 3:
Input: weights = [1,2,3,1,1], days = 4
Output: 3

Constraints:
- 1 <= days <= weights.length <= 500
- 1 <= weights[i] <= 500

*/

class Solution {
  /**
   * @param {number[]} weights
   * @param {number} days
   * @return {number}
   */
  shipWithinDays(weights, days) {
    // ! left 不找最大 下面的 count 計算會錯誤
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b, 0);

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      // * 應該從第一天開始算
      let count = 1;
      let remain = mid;

      for (let w of weights) {
        if (remain < w) {
          count++;
          remain = mid;
        }
        remain -= w;
      }

      if (count > days) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }
}
