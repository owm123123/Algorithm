/*
* 1325. Delete Leaves With a Given Value

Given a binary tree root and an integer target, delete all the leaf nodes with value target. Note that once you delete a leaf node with value target, if its parent becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).

Return the root of the tree after deleting all target leaves.

Example 1:
Input: root = [1,2,3,2,null,2,4], target = 2
Output: [1,null,3,null,4]

Example 2:
Input: root = [1,3,3,3,2], target = 3
Output: [1,null,null,null,2]

Example 3:
Input: root = [1,2,null,2,null,2], target = 2
Output: [1]

Constraints:
- The number of nodes in the tree is in the range [1, 3000].
- 1 <= Node.val, target <= 1000
*/

class Solution {
  /**
   * @param {TreeNode} root
   * @param {number} target
   * @return {TreeNode}
   */
  removeLeafNodes(root, target) {
    let dfs = (node) => {
      if (!node) return null;
      node.left = dfs(node.left);
      node.right = dfs(node.right);
      if (!node.left && !node.right && node.val === target) return null;
      return node;
    };
    return dfs(root);
  }
}
