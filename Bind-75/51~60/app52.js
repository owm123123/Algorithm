//* Kth Smallest Element in a BST

/**
 * Given the root of a binary search tree, and an integer k,
 * * return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 * * 題目: 整棵樹第 k 小的位置
 * * binary search 表示 root > left & root < right
 * * inorder 可以幫你排序 (小到大)
 *  */

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
//-------------------------

//-------------------------
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result = [];

  // * inorder: left root right
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    result.push(node);
    inorder(node.right);
  };

  inorder(root);
  return result[k - 1];
};
