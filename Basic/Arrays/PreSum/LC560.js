/*
* 560. Subarray Sum Equals K
* https://medium.com/@ChYuan/leetcode-560-subarray-sum-equals-k-%E5%BF%83%E5%BE%97-medium-174f3c9edc5c (ChingYuanYang)

Given an array of integers nums and an integer k, 
return the total number of continuous subarrays whose sum equals to k.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

Constraints:
- 1 <= nums.length <= 2 * 10^4
- -1000 <= nums[i] <= 1000
- -10^7 <= k <= 10^7
*/

/*
* 例子 
nums = [1, 2, 3, 4, 5], k = 9
那 hashtable 裡面會存累加的值的數目，
1: 1
3: 1
6: 1
10: 1
15: 1
這個陣列和是 15。
* 這裡可以很快看出來有個 continuous subarray 符合。
* 方法是 15–9 = 6，6 出現一次，因此有個 continuous subarray 符合。
因為 6 是 [1, 2, 3, 4, 5] 中的 [1, 2, 3]，而 15 是 [1, 2, 3, 4, 5]
15–9 = 6 的意義其實是兩個 array 的差，也就是 [4, 5]，也是一個 continuous subarray 並且是我們要的 sum。 
 */

// Write your solution below:
// * 前綴和 + HashMap
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  subarraySum(nums, k) {
    let map = new Map();
    // * 因為 n = k 時, 可以直接加, 所以初始化 {0:1}
    map.set(0, 1);
    let sum = 0;
    let count = 0;

    for (let n of nums) {
      sum += n;
      if (map.has(sum - k)) {
        count += map.get(sum - k);
      }
      map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
  }
}
