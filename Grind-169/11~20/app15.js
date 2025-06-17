// * Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.

// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: true;

// Input: root = [1, 2, 2, 3, 3, null, null, 4, 4];
// Output: false;

// Input: root = [];
// Output: true;

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    if (left === -1) return -1;
    let right = dfs(node.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  };

  return dfs(root) !== -1;
};
