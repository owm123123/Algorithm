// * 449. Serialize and Deserialize BST
// Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
// The encoded string should be as compact as possible.

// Input: root = [2,1,3]
// Output: [2,1,3]

// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The input tree is guaranteed to be a binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // * preorder (root -> left -> right)
  if (!root) return '';
  let res = [];

  let preorder = (node) => {
    if (!node) return;
    res.push(node.val);
    if (node.left) preorder(node.left);
    if (node.right) preorder(node.right);
  };

  preorder(root);
  // ! 當 res = [] 時, 會 return '';
  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  let list = data.split(',').map(Number);

  let build = (min, max) => {
    // valid
    if (!list.length) return null;
    // ! 因為下面設定 val - 1 跟 val + 1 所以不是 <= min 跟 max >=
    if (list[0] < min || list[0] > max) return null;

    // build
    let val = list.shift();
    let node = new TreeNode(val);
    node.left = build(min, val - 1);
    node.right = build(val + 1, max);
    return node;
  };

  return build(-Infinity, Infinity);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
