/*
* 105. Construct Binary Tree From Preorder And Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]

Constraints:
- 1 <= preorder.length <= 3000
- inorder.length == preorder.length
- -3000 <= preorder[i], inorder[i] <= 3000
- preorder and inorder consist of unique values.
- Each value of inorder also appears in preorder.
- preorder is guaranteed to be the preorder traversal of the tree.
- inorder is guaranteed to be the inorder traversal of the tree.
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
   * @param {number[]} preorder
   * @param {number[]} inorder
   * @return {TreeNode}
   */
  // preorder: root -> left -> right
  // 1 2 4 5 3 6 7
  // 2 4 5
  // 4 2 5
  // inorder: left -> root -> right
  // 4 2 5 1 6 3 7

  buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    let val = preorder[0];
    let idx = inorder.indexOf(val); // 3
    let root = new TreeNode(val);
    // ! slice: 不會改到原陣列, splice: 會修改
    root.left = this.buildTree(
      preorder.slice(1, idx + 1),
      inorder.slice(0, idx)
    );
    root.right = this.buildTree(
      preorder.slice(idx + 1),
      inorder.slice(idx + 1)
    );
    return root;
  }
}
