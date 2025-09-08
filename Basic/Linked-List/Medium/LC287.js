/*
* 287. Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Constraints:
1 <= n <= 10^5
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
*/

/*
 * https://medium.com/@aien1020210305/leetcode-%E7%AD%86%E8%A8%98-287-find-the-duplicate-number-d70bc2e79bf4
1. 把當前的元素，當成下一個元素的 index，變成一個類似 linked list 的鏈表
2. 然後設定一組快慢指針，慢指針走一步，快指針走兩步，在鏈表中有重複的元素，快指針會先走到有重複元素的環內，慢指針也會走到有重複元素的環內，這時如果快慢指針都走到相同的元素，代表這個元素就是我們要找的重複的元素
3. 例如走過 2 這個元素，後面又再次遇到 2 的時候，代表 2 是重複的元素，然而會形成一個環，在這個有重複元素的還內一直打轉
4. 另外設定第三個指針檢查，用意是找出環的頭，無論用慢指針或快指針去和檢查指針比對都行，快慢指針是一樣的元素 
*/

/*
 * [3,1,3,4,2]
 * 0 1 2 3 4
 * 3 1 3 4 2
 * 找出環狀的地方
 */
// * 可以用 slow-fast 解題
class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findDuplicate(nums) {
    let slow = 0;
    let fast = 0;
    while (true) {
      slow = nums[slow];
      fast = nums[nums[fast]];
      if (slow === fast) break;
    }

    let check = 0;
    while (true) {
      slow = nums[slow];
      check = nums[check];
      if (slow === check) {
        return slow;
      }
    }
  }
}
