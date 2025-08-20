/*
LeetCode 846. Hand of Straights

You are given an integer array `hand` where `hand[i]` is the value written on the ith card and an integer `groupSize`. 
Return true if and only if you can rearrange the cards in `hand` so that they can be grouped into groups of `groupSize` consecutive cards.

Example 1:
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: 
You can rearrange the cards into groups: [1,2,3], [2,3,4], [6,7,8]

Example 2:
Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: 
You cannot group the cards into groups of 4 consecutive cards.

Constraints:
- 1 <= hand.length <= 10^4
- 0 <= hand[i] <= 10^9
- 1 <= groupSize <= hand.length

--------------------
Write your solution below:
*/

class Solution {
  /**
   * @param {number[]} hand
   * @param {number} groupSize
   * @return {boolean}
   */
  isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    let count = new Map();
    for (let n of hand) {
      count.set(n, (count.get(n) || 0) + 1);
    }
    hand.sort((a, b) => a - b);
    for (let n of hand) {
      if (count.get(n) === 0) continue;
      for (let i = 0; i < groupSize; i++) {
        let curr = n + i;
        if ((count.get(curr) || 0) === 0) return false;
        count.set(curr, count.get(curr) - 1);
      }
    }
    return true;
  }
}
