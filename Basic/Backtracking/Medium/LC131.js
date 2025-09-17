/*
* 131. Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]

Constraints:
1 <= s.length <= 16
s contains only lowercase English letters.
*/

/*
* 執行樹狀圖
backTrack(0, [])
├── end=0: "a" ✅
│   └── backTrack(1, ["a"])
│       ├── end=1: "a" ✅
│       │   └── backTrack(2, ["a","a"])
│       │       └── end=2: "b" ✅
│       │           └── backTrack(3, ["a","a","b"])
│       │               └── 🎉 找到解: ["a","a","b"]
│       └── end=2: "ab" ❌
│
├── end=1: "aa" ✅
│   └── backTrack(2, ["aa"])
│       └── end=2: "b" ✅
│           └── backTrack(3, ["aa","b"])
│               └── 🎉 找到解: ["aa","b"]
│
└── end=2: "aab" ❌  
*/

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

    let backTrack = (start, sub) => {
      if (start === len) {
        res.push([...sub]);
        return;
      }

      for (let end = start; end < len; end++) {
        if (isPalindrome(s, start, end)) {
          sub.push(s.substring(start, end + 1));
          backTrack(end + 1, sub);
          sub.pop();
        }
      }
    };

    backTrack(0, []);
    return res;
  }
}
