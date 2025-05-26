//* Lowest Common Ancestor of a Binary Search Tree

/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * * LCA: 最近公共祖先
 * * 給定兩個節點 p 和 q，找到離根最近、同時是 p 和 q 的祖先的那個節點
 
      6
     / \
    2   8
   / \ / \
  0  4 7  9
    / \
   3   5
   
 * p = 2, q = 8，LCA 是 6（因為 6 同時是 2 和 8 的祖先，且離根最近）
 * p = 2, q = 4，LCA 是 2（因為 2 是自己和 4 的祖先）
 *  
 */

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

// Input: root = [2,1], p = 2, q = 1
// Output: 2
//-------------------------

//-------------------------
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * @description // * 因為是 BST 所以找 LCA 方法 固定 且 簡單
 */
var lowestCommonAncestor = function (root, p, q) {
  // ! 題目有提到 p & q 是一個 TreeNode

  // left
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // right
  if (p.val > root.val && p.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};
