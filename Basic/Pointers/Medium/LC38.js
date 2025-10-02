/*
* 38. Count and Say

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

- countAndSay(1) = "1"
- countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

To determine how you "say" a digit string, group the same consecutive digits together and describe how many of each digit there are in order. For example, "3322251" is said as "two 3's, three 2's, one 5, and one 1" or "23321511".

Given a positive integer n, return the nth term of the count-and-say sequence.

Example 1:
Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = "11"
countAndSay(3) = "21"
countAndSay(4) = "1211"

Constraints:
1 <= n <= 30
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';

  let res = '1';
  for (let i = 2; i <= n; i++) {
    let tmp = [];
    let l = 0;
    for (let r = 0; r <= res.length; r++) {
      if (r === res.length || res[l] !== res[r]) {
        let count = r - l;
        tmp.push(count.toString(), res[l]);
        l = r;
      }
    }
    res = tmp.join('');
  }

  return res;
};
