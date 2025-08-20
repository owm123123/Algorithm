/**
 * 649. Dota2 Senate
 *
 * In the world of Dota2, there are two parties: the Radiant and the Dire.
 * The Dota2 senate consists of senators coming from two parties. Now the senate wants to make a decision about a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise one of the two rights:
 *
 * 1. Ban one senator from the other party.
 * 2. Announce the victory if all the senators from the other party are banned.
 *
 * Given a string `senate` representing each senator's party belonging. The character 'R' represents a Radiant senator and 'D' represents a Dire senator.
 *
 * Then, if there are n senators, the round-based procedure starts from the first senator to the last senator in the order of the given string. The procedure continues until a party announces victory.
 *
 * Return the name of the winning party: "Radiant" or "Dire".
 *
 * Example 1:
 * Input: senate = "RD"
 * Output: "Radiant"
 *
 * Example 2:
 * Input: senate = "RDD"
 * Output: "Dire"
 *
 * Constraints:
 * - 1 <= senate.length <= 10^4
 * - senate[i] is either 'R' or 'D'.
 */

// Write your solution here:

/*
* 解題思路
  把每個 'R' 和 'D' 的索引分別放進兩個隊列（radiant, dire）。
  每一輪，取出兩個隊列的頭部，比較索引，較小的那個可以 ban 對方，然後把自己加到隊尾（索引 + n）。
  被 ban 的議員不再參與後續投票。
  最後只剩一個隊列有議員，回傳對應黨派。
*/
class Solution {
  /**
   * @param {string} senate
   * @return {string}
   */
  predictPartyVictory(senate) {
    let radiants = [];
    let dires = [];
    let n = senate.length;

    for (let i = 0; i < n; i++) {
      if (senate[i] === 'R') radiants.push(i);
      else dires.push(i);
    }

    while (radiants.length && dires.length) {
      let r = radiants.shift();
      let d = dires.shift();

      if (r < d) radiants.push(r + n);
      else dires.push(d + n);
    }

    return radiants.length === 0 ? 'Dire' : 'Radiant';
  }
}
