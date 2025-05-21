// Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Input: (preorder = [3, 9, 20, 15, 7]), (inorder = [9, 3, 15, 20, 7]);
// Output: [3, 9, 20, null, null, 15, 7];
// Input: (preorder = [-1]), (inorder = [-1]);
// Output: [-1];
//-------------------------

/**
 * preorder => root / all left / all right
 * inorder => all left / root / all right
 *
 * 1. 找到 root value: preorder[0]
 * 2. 找到 inorder root index => 劃分左右邊
 *
 * 3. 設定 root.left
 *    inorder.slice(0, root.index)
 *    preorder.slice(1, 1 + leftInorder.length)
 *
 *    設定 root.right
 *    inorder.slice(root.index + 1)
 *    preorder.slice(1 + leftInorder.length)
 *
 */

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// recursion
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  // find root node (preorder[0])
  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  // find inorder root node position
  // 可以分成左右邊
  const rootIndex = inorder.indexOf(rootVal);

  // divide left & right node
  const leftInorder = inorder(0, rootIndex);
  const rightInorder = inorder(rootIndex + 1);

  const leftPreorder = preorder(1, 1 + leftInorder.length);
  const rightPreorder = preorder(1 + leftInorder.length);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
};
