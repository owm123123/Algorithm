// * Pacific Atlantic Water Flow
// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
// [0,4]: [0,4] -> Pacific Ocean
//        [0,4] -> Atlantic Ocean
// [1,3]: [1,3] -> [0,3] -> Pacific Ocean
//        [1,3] -> [1,4] -> Atlantic Ocean
// [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
//        [1,4] -> Atlantic Ocean
// [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
//        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
// [3,0]: [3,0] -> Pacific Ocean
//        [3,0] -> [4,0] -> Atlantic Ocean
// [3,1]: [3,1] -> [3,0] -> Pacific Ocean
//        [3,1] -> [4,1] -> Atlantic Ocean
// [4,0]: [4,0] -> Pacific Ocean
//        [4,0] -> Atlantic Ocean
// Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.

// Input: heights = [[1]]
// Output: [[0,0]]
// Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  /**
   * * 思路
   * * 不是每個格子往外走看能不能到海洋 (超時)
   * * 海洋邊界往內走
   */
  const rows = heights.length,
    cols = heights[0].length;
  const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
  const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let dfs = (r, c, visited, prevHeight) => {
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      visited[r][c] ||
      heights[r][c] < prevHeight
    )
      return;
    visited[r][c] = true;
    for (let [dr, dc] of dirs) {
      dfs(r + dr, c + dc, visited, heights[r][c]);
    }
    // 從太平洋邊界出發
    for (let i = 0; i < rows; i++) dfs(i, 0, pacific, -Infinity);
    for (let j = 0; j < cols; j++) dfs(0, j, pacific, -Infinity);

    // 從大西洋邊界出發
    for (let i = 0; i < rows; i++) dfs(i, cols - 1, atlantic, -Infinity);
    for (let j = 0; j < cols; j++) dfs(rows - 1, j, atlantic, -Infinity);

    const res = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);
      }
    }
    return res;
  };
};
