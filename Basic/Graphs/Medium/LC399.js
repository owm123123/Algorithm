/*
*  399. Evaluate Division

You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents a query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

Example 1:
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation:
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is not defined thus a / x is undefined, result is -1.0

Example 2:
Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]

Example 3:
Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
 
Constraints:
1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[j].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lower case English letters and digits.
*/

/*
* 解題思路 (輸入：equations = [["a","b"],["b","c"]], values = [2.0,3.0])
* 1. 建圖
// 處理 a/b = 2.0
graph["a"] = [["b", 2.0]]
graph["b"] = [["a", 0.5]] (1 / value)

* DFS 查找
// 查詢 a/c dfs("a", "c", new Set())
1. 從 "a" 開始，visited = {"a"}
2. 遍歷鄰居：["b", 2.0]
3. 遞迴：dfs("b", "c", {"a"})
   - 從 "b" 開始，visited = {"a", "b"}  
   - 遍歷鄰居：["c", 3.0]
   - 找到目標 "c"！
   - 返回 3.0
4. 回到上層：2.0 × 3.0 = 6.0

* 例外處理
// 同一變數：a/a = 1.0
if (start === end) return 1.0;
// 變數不存在：x/y = -1.0
if (!graph[start] || !graph[end]) return -1.0;
// 無路徑：a/e = -1.0
return -1.0;  // DFS 結束時找不到路徑
*/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// equations = [["a","b"],["b","c"]],
// values = [2.0,3.0],
// queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.0, 0.5, -1.0, 1.0, -1.0];
var calcEquation = function (equations, values, queries) {
  // 1. 建圖
  let graph = {};
  for (let i = 0; i < values.length; i++) {
    let [a, b] = equations[i];
    let val = values[i];

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push([b, val]);
    graph[b].push([a, 1 / val]);
  }

  // 2. DFS
  let dfs = (start, end, visit) => {
    // 3. 例外處理
    if (!graph[start] || !graph[end]) return -1;
    if (start === end) return 1.0;

    visit.add(start);

    for (let [nei, val] of graph[start]) {
      if (!visit.has(nei)) {
        let tmp = dfs(nei, end, visit);
        if (tmp !== -1.0) {
          return val * tmp;
        }
      }
    }
    return -1.0;
  };

  let res = [];
  for (let i = 0; i < queries.length; i++) {
    let [start, end] = queries[i];
    res.push(dfs(start, end, new Set()));
  }
  return res;
};
