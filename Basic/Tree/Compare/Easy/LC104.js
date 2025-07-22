// * 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Input: root = [1,null,2]

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let maxDeep = 0;
  let dfs = (node, deep) => {
    if (!node) return 0;
    if (!node.left && !node.right) {
      maxDeep = Math.max(deep, maxDeep);
    }
    if (node.left) dfs(node.left, deep + 1);
    if (node.right) dfs(node.right, deep + 1);
  };
  dfs(root, 1);
  return maxDeep;
};
