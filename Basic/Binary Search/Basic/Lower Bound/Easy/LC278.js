// * 278. First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Input: n = 1, bad = 1
// Output: 1

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    /**
     * * 解題思路
     * 假設總共 1 ~ 10 版本
     * 可能 4 ~ 10 是錯的 (f f f t t t t t t t)
     * 所以用 binary search 最快找到
     */

    // * 注意題目給的是 1 ~ n
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        // ! 他也是錯誤版本, 所以需要留著
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
