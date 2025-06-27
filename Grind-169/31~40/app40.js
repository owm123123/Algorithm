// * Lowest Common Ancestor of a Binary Tree
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

// Input: root = [1,2], p = 1, q = 2
// Output: 1

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
 */
var lowestCommonAncestor = function (root, p, q) {
  // * Binary Tree: 沒有規定 left < root， right > root

  /**
   * * 遞迴流程
   * * 1. 遇到空節點，回傳 null
   * * 2. 遇到 p 或 q，回傳自己（因為自己就是祖先）
   * * 3. 遞迴找左子樹、右子樹
   * * 4. 如果左右子樹都不是 null，代表 p、q 分別在左右，root 就是祖先
   * * 5. 如果只有一邊不是 null，代表 p、q 都在那一邊，往上傳那一邊的結果
   */

  if (!root) return null; // 空節點
  if (root === p || root === q) return root; // 找到 p 或 q

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root; // p, q 分別在左右
  if (left) return left; // 都在左
  if (right) return right; // 都在右
};
