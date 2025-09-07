/*
* LeetCode 875. Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the i-th pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during that hour.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:
- 1 <= piles.length <= 10^4
- 1 <= piles[i] <= 10^9
- piles.length <= h <= 10^9
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    let hours = 0;
    for (let pile of piles) {
      /*
      * 假如 26 / 10 你想到得到 3
      ! 不能用 Math.floor(26 / 10) + 1 (如果 30 / 10 本來應該得到 3 這樣會變成 4)
      * 請用 Math.ceil(26 / 10)
       */
      hours += Math.ceil(pile / mid);
    }

    /*
    說明
    * 你要找「最小速度」使得吃完香蕉所需小時 ≤ h。
    * 如果用 count >= h，當 count 剛好等於 h 時，也會把速度往右移（left = mid + 1），
    * 這樣會跳過剛好符合條件的速度，最後回傳的 left 會比最小可行速度大。
    總結
    * 應該用 count > h，這時才需要加快速度（left = mid + 1）。
    * 否則（count <= h），就可以嘗試更慢的速度（right = mid - 1）。
     */
    if (hours > h) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
