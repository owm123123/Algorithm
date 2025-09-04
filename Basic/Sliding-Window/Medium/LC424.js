/*
* 424. Longest Repeating Character Replacement

Given a string s and an integer k, you are allowed to choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".

Constraints:
- 1 <= s.length <= 10^5
- s consists of only uppercase English letters.
- 0 <= k <= s.length
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;
  // * maxCount: 儲存"當前最多字"數量
  let maxCount = 0;
  let res = 0;
  const count = new Array(26).fill(0);

  for (let right = 0; right < s.length; right++) {
    const i = s.charCodeAt(right) - 65;
    count[i]++;
    maxCount = Math.max(maxCount, count[i]);

    // * 這裡的 right - left + 1 - maxCount 計算 窗口要縮到多小, 所以不用理會 maxCount, 移動 left 即可
    while (right - left + 1 - maxCount > k) {
      count[s.charCodeAt(left) - 65]--;
      left++;
    }
    res = Math.max(res, right - left + 1);
  }

  return res;
};
