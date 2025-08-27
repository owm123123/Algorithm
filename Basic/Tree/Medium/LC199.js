/*
* 199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Constraints:
- The number of nodes in the tree is in the range [0, 100].
- -100 <= Node.val <= 100

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[]}
   */
  rightSideView(root) {
    let res = [];
    if (!root) return [];

    let queue = [root];

    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let node = queue.shift();
        if (i === 0) {
          res.push(node.val);
        }
        if (node.right) queue.push(node.right);
        if (node.left) queue.push(node.left);
      }
    }
    return res;
  }
}
