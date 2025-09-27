/*
* 2517. Maximum Tastiness of Candy Basket

You are given an array of positive integers price representing the price of candies and a positive integer k.

The store sells n different candies. The tastiness of a candy basket is defined as the minimum absolute difference of the prices of any two candies in the basket.

You want to select k candies such that the tastiness of the basket is maximized.

Return the maximum tastiness of the candy basket.

Example 1:
Input: price = [13,5,1,8,21,2], k = 3
Output: 8
Explanation: Choose the candies with prices [13, 5, 21]. The tastiness is min(|13-5|, |13-21|, |5-21|) = min(8, 8, 16) = 8. It can be shown that 8 is the maximum tastiness possible.

Example 2:
Input: price = [1,3,1], k = 2
Output: 2
Explanation: Choose the candies with prices [1, 3]. The tastiness is |1-3| = 2.

Example 3:
Input: price = [7,7,7,7], k = 2
Output: 0
Explanation: Any two candies have the same price, so the tastiness is 0.

Constraints:
- 2 <= k <= price.length <= 10^5
- 1 <= price[i] <= 10^9
*/

/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
// * 找到一種選擇 k 個糖果的方式，使得這 k 個糖果中最小的價格差最大。
var maximumTastiness = function (price, k) {
  // [13, 5, 1, 8, 21, 2];
  // [1, 2, 5, 7, 13, 21];
  price.sort((a, b) => a - b);

  let left = 0;
  let right = Math.floor(price[price.length - 1] - price[0]);

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (canSelect(price, k, mid)) {
      left = mid + 1; // 嘗試更大的美味度
    } else {
      right = mid - 1; // 降低美味度
    }
  }

  return right;
};

// 貪心驗證：能否選出 k 個糖果使得最小價格差 >= tastiness
function canSelect(price, k, tastiness) {
  let count = 1; // 至少選第一個糖果
  let lastSelected = price[0];

  for (let i = 1; i < price.length; i++) {
    // 如果與上一個選中糖果的價格差 >= tastiness，就選這個
    if (price[i] - lastSelected >= tastiness) {
      count++;
      lastSelected = price[i];

      if (count === k) return true; // 已選夠 k 個
    }
  }

  return false;
}
