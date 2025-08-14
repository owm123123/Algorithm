/*
* 881. Boats to Save People

You are given an array people where people[i] is the weight of the i-th person, and an infinite number of boats where each boat can carry a maximum weight of limit. 
! Each boat carries at most two people at the same time,
! 每艘船最多只能 2 個人 
provided the sum of their weight is at most limit.

Return the minimum number of boats to carry every given person.

Example 1:
Input: people = [1,2], limit = 3
Output: 1

Example 2:
Input: people = [3,2,2,1], limit = 3
Output: 3

Example 3:
Input: people = [3,5,3,4], limit = 5
Output: 4

Constraints:
- 1 <= people.length <= 5 * 10^4
- 1 <= people[i] <= limit <= 3 * 10^4

----------------------------------------
Write your solution below:
*/

class Solution {
  /**
   * @param {number[]} people
   * @param {number} limit
   * @return {number}
   */
  numRescueBoats(people, limit) {
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length - 1;
    let count = 0;
    while (left <= right) {
      if (people[left] + people[right] <= limit) {
        left++;
        right--;
      } else {
        right--;
      }
      count++;
    }
    return count;
  }
}
