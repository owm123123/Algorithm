// * 508. Most Frequent Subtree Sum
// Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.
// The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).
// * subtree: 對於樹中每個節點，計算以該節點為根的所有節點值的總和（包含自己和所有子孫）。

// Input: root = [5,2,-3]
// Output: [2,-3,4]
// * 子樹和有：2（左子樹）、-3（右子樹）、4（整棵樹 5+2+(-3)）
// * 每個和都只出現一次，所以答案是 [2, -3, 4]

// Input: root = [5,2,-5]
// Output: [2]
// * 子樹和有：2、-5、2（5+2+(-5)=2）
// * 2 出現兩次，-5 出現一次，所以答案是 [2]

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -105 <= Node.val <= 105

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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  if (!root) return [];
  let maxCount = 0;
  let map = new Map();

  let dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    let sum = left + right + node.val;
    let count = (map.get(sum) || 0) + 1;
    map.set(sum, count);
    maxCount = Math.max(maxCount, count);
    return sum;
  };

  dfs(root);

  let res = [];
  for (let [sum, count] of map.entries()) {
    if (count === maxCount) res.push(sum);
  }
  return res;
};
