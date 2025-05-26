// Clone Graph
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

/**
 * *
 * * class Node {
 * *   public int val;
 * *    public List<Node> neighbors;
 * * }
 */

// Test case format:
// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.
// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.
// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
//-------------------------
/**
 * ! 避免 無限循環 重複複製 => 使用 Map<原圖node, 深拷貝node> 紀錄
 *
 * * 核心: DFS
 * * 1. 檢查是否複製做: if(map.has(origin)) return map.get(origin)
 * * 2. 建立node: let copy = new _Node(origin.val)
 * * 3. 建立neightbor for(let neighbor of origin.neighbors) copy.neightbors.push(dfs(neightbor))
 *
 */
//-------------------------
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

/**
 * * 鄰接表（adjacency list）
 *
 * * 翻譯:
 * * 第1個子陣列 [2,4]：第1個節點（val=1）的鄰居是2和4
 * * 第2個子陣列 [1,3]：第2個節點（val=2）的鄰居是1和3
 * * 第3個子陣列 [2,4]：第3個節點（val=3）的鄰居是2和4
 * * 第4個子陣列 [1,3]：第4個節點（val=4）的鄰居是1和3
 */

// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.

// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.
//-------------------------

/**
 * map<原圖node, 深拷貝node>
 * dfs
 * 1. map has current node: get
 * 2. map hasn't current node:
 *    1. copy: new _node
 *    2. set map
 *    3. for-each current node neightbor
 *        copy.neighbor.push (dfs(neightbor))
 */

//-------------------------
/**
 * Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  // ! key: origin | value: copy
  let map = new Map();

  // * 核心: DFS
  const dfs = (origin) => {
    if (map.has(origin)) {
      return map.get(origin);
    }

    const copy = new _Node(origin.val);
    map.set(origin, copy);

    for (const neighbor of origin.neighbors) {
      copy.neightbors.push(dfs(neighbor));
    }

    return copy;
  };

  return dfs(node);
};
