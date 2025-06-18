// * Rotting Oranges
// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let rows = grid.length,
    cols = grid[0].length;
  let queue = [];
  let count = 0;
  // * 需要紀錄有幾個新鮮水果
  let fresh = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queue.push([r, c]);
      // * 紀錄
      if (grid[r][c] === 1) fresh++;
    }
  }

  // ! 沒有新鮮 return
  if (fresh === 0) return 0;

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // ! 還存在 fresh 才要 loop
  while (queue.length && fresh > 0) {
    let len = queue.length;
    count++;
    for (let i = 0; i < len; i++) {
      let [r, c] = queue.shift();
      for (let [dr, dc] of dirs) {
        let nr = r + dr;
        let nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          grid[nr][nc] === 1
        ) {
          queue.push([nr, nc]);
          grid[nr][nc] = 2;
          fresh--;
        }
      }
    }
  }

  // ! 如果還有新鮮水果回傳 -1
  return fresh !== 0 ? -1 : count;
};
