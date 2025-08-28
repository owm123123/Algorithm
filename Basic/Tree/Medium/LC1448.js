/*
* 1448. Count Good Nodes In Binary Tree

Given a binary tree, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
* 從根節點到某個節點 X 的路徑上，沒有任何節點的值比 X 大，則 X 是 good node。

Return the number of good nodes in the binary tree.

Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4

Example 2:
Input: root = [3,3,null,4,2]
Output: 3

Example 3:
Input: root = [1]
Output: 1

Constraints:
- The number of nodes in the binary tree is in the range [1, 10^5].
- Each node's value is between [-10^4, 10^4].
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
   * @return {number}
   */
  goodNodes(root) {
    let count = 0;
    if (!root) return 0;

    let dfs = (node, max) => {
      if (!node) return;
      if (node.val >= max) {
        count++;
      }
      max = Math.max(max, node.val);
      dfs(node.left, max);
      dfs(node.right, max);
    };

    dfs(root, root.val);
    return count;
  }
}
