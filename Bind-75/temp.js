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
  let max = 0;
  if (!root) return max;

  let dfs = (node, len) => {
    if (!node.left && !node.right) {
      max = Math.max(max, len);
    }
    if (node.left) {
      return dfs(node.left, len + 1);
    }
    if (node.right) {
      return dfs(node.right, len + 1);
    }
  };

  dfs(root, 1);

  return max;
};
