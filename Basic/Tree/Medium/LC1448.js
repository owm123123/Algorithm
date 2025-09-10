/*
* 1448. Count Good Nodes In Binary Tree

Given a binary tree, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
* 從根節點到某個節點 X 的路徑上，沒有任何節點的值比 X 大，則 X 是 good node。

Return the number of good nodes in the binary tree.

Example 1:
Input: root = [3,1,4,3,null,1,5]
Output: 4

Example 2:
Input: root = [3,3,null,4,2]
Output: 3

Example 3:
Input: root = [1]
Output: 1

Constraints:
- The number of nodes in the binary tree is in the range [1, 10^5].
- Each node's value is between [-10^4, 10^4].
*/

/*
* Good Node 的定義：從根節點到該節點的路徑上，沒有任何節點值比它大。
! 表示說 如果 2 -> 4 -> 這一個就要 大於等於 4
[3,1,4,3,null,1,5]
節點 3（根）：路徑 [3]，最大值 = 3，3 >= 3 ✓ → count = 1
節點 1（左子）：路徑 [3,1]，最大值 = 3，1 >= 3 ✗ → count = 1
節點 3（左左子）：路徑 [3,1,3]，最大值 = 3，3 >= 3 ✓ → count = 2
節點 4（右子）：路徑 [3,4]，最大值 = 3，4 >= 3 ✓ → count = 3
節點 1（右右子）：路徑 [3,4,1]，最大值 = 4，1 >= 4 ✗ → count = 3
節點 5（右右左子）：路徑 [3,4,1,5]，最大值 = 4，5 >= 4 ✓ → count = 4
*/

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  goodNodes(root) {
    let count = 0;
    if (!root) return 0;

    let dfs = (node, max) => {
      if (!node) return;
      if (node.val >= max) {
        count++;
      }
      // * 隨時記錄最大節點的value
      max = Math.max(max, node.val);
      dfs(node.left, max);
      dfs(node.right, max);
    };

    dfs(root, root.val);
    return count;
  }
}
