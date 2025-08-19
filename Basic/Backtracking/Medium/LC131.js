/**
 * * 131. Palindrome Partitioning
 * * Palindrome: 回文
 *
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 *
 * Example 1:
 * Input: s = "aab"
 * Output: [["a","a","b"],["aa","b"]]
 *
 * Example 2:
 * Input: s = "a"
 * Output: [["a"]]
 *
 * Constraints:
 * - 1 <= s.length <= 16
 * - s contains only lowercase English letters.
 */

// Write your solution here:
class Solution {
  /**
   * @param {string} s
   * @return {string[][]}
   */
  partition(s) {
    let res = [];
    let len = s.length;

    let isPalindrome = (str, left, right) => {
      while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
      }
      return true;
    };

    let backTrack = (start, []) => {
      if (start === len) {
        res.push([...path]);
        return;
      }

      for (let end = start; end < len; end++) {
        if (isPalindrome(s, start, end)) {
          path.push(s.substring(start, end + 1));
          backTrack(end + 1, path);
          path.pop();
        }
      }
    };

    backTrack(0, []);
    return res;
  }
}
