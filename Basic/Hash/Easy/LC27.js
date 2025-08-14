/**
 * 27. Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * * in-place 修改原陣列
 *
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 *
 * Example 2:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,4,0,3,_,_,_]
 *
 * Note:
 * - The underscore (_) represents elements that are removed.
 * - You must do this by modifying the input array in-place with O(1) extra memory.
 */

// ! 因為 neetcode 標記 hash, 但其實是 two pointer
// * in-place 修改原陣列
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  // Write your code here
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }

  return k;
}
