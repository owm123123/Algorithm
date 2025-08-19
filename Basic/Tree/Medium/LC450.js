/**
 * 450. Delete Node in a BST
 *
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 *
 * Basically, find the node with the given key and remove it.
 * If the node to be deleted has two children, replace it with its in-order successor or predecessor.
 *
 * Example 1:
 * Input: root = [5,3,6,2,4,null,7], key = 3
 * Output: [5,4,6,2,null,null,7]
 * Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
 * One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
 *
 * Constraints:
 * - The number of nodes in the tree is in the range [0, 10^4].
 * - -10^5 <= Node.val <= 10^5
 * - Each node has a unique value.
 * - root is a valid binary search tree.
 * - -10^5 <= key <= 10^5
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
三種情況
1.沒有子樹：直接刪除（回傳 null）。
2.只有一個子樹：用子樹取代自己（回傳 left 或 right）。
3.有兩個子樹：用「中序後繼」（右子樹最左節點）或「中序前驅」（左子樹最右節點）取代自己，然後刪除那個節點。
*/
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
  if (root === null) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    // 1.沒有子樹：直接刪除（回傳 null）
    if (!root.left && !root.right) return null;
    // 2.只有一個子樹：用子樹取代自己
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    // 3.兩個子樹：找右子樹最左節點（中序後繼）
    let successor = root.right;
    while (successor.left) successor = successor.left;
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }
  return root;
}
