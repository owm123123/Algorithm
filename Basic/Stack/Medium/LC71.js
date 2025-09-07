/*
* LeetCode 71. Simplify Path

Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash. For this problem, any other format of periods such as '...' are treated as file/directory names.
* 題目只規定 . 代表當前目錄、.. 代表上一層，其它（如 ...、_home）都視為有效目錄名。

The canonical path should have the following format:
- The path starts with a single slash '/'.
- Any two directories are separated by a single slash '/'.
- The path does not end with a trailing '/'.
- The path only contains the directories on the path from the root directory to the target file or directory (i.e., no '.' or '..').

Return the simplified canonical path.

Example 1:
Input: path = "/home/"
Output: "/home"

Example 2:
Input: path = "/../"
Output: "/"

Example 3:
Input: path = "/home//foo/"
Output: "/home/foo"

Constraints:
- 1 <= path.length <= 3000
- path consists of English letters, digits, period '.', slash '/' or '_'.

*/

/*
* 解題思路
1. 用 / 分割 path，得到每個片段（如 "home", "..", ".", ""）。
遍歷每個片段：
2. 判斷 
* 如果是空字串或 "."，跳過（代表當前目錄或多餘的斜線）。
* 如果是 ".."，且 stack 不空，pop 一個（回到上一層目錄）。
* 其他情況（有效目錄名），push 進 stack。
3. 最後用 "/" 把 stack 裡的目錄組合起來，前面加一個 "/"。
*/
class Solution {
  /**
   * @param {string} path
   * @return {string}
   */
  // /a/./b/../../c/
  simplifyPath(path) {
    let stack = [];
    let arr = path.split('/');
    for (let s of arr) {
      if (s === '' || s === '.') continue;

      if (word === '..') {
        if (stack.length !== 0) stack.pop();
      } else {
        stack.push(word);
      }
    }
    return '/' + stack.join('/');
  }
}
