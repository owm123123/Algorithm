// Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [2, 1, 3];
// Output: true;!

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

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
var isValidBST = function (root) {
  const validate = (node, min, max) => {
    // 表示檢查都合法
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  };

  return validate(root, -Infinity, Infinity);
};
