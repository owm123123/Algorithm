/**
 * 286. Walls and Gates
 *
 * You are given an m x n 2D grid initialized with these three possible values:
 * -1 - A wall or an obstacle.
 *  0 - A gate.
 *  INF - Infinity (represented by 2^31 - 1), means an empty room.
 *
 * Fill each empty room with the number of steps to its nearest gate.
 * If it is impossible to reach a gate, leave INF in that room.
 *
 * Example:
 * Input:
 * [
 *   [INF,  -1,   0,  INF],
 *   [INF, INF, INF,  -1],
 *   [INF,  -1, INF,  -1],
 *   [  0,  -1, INF, INF]
 * ]
 *
 * Output:
 * [
 *   [  3,  -1,   0,   1],
 *   [  2,   2,   1,  -1],
 *   [  1,  -1,   2,  -1],
 *   [  0,  -1,   3,   4]
 * ]
 *
 * Constraints:
 * - m == rooms.length
 * - n == rooms[i].length
 * - 1 <= m, n <= 250
 * - -1 <= rooms[i][j] <= 2^31 - 1
 *
 * Write your function below:
 */

// ! 使用拓樸排序時機: 有項圖 & 無環
/**
 * @param {number[][]} grid
 */
function wallsAndGates(grid) {
  // TODO: Implement this function
  let queue = []; // [step, row, col]
  let rows = grid.length;
  let cols = grid[0].length;
  let dist = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let INF = 2 ** 31 - 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    let [row, col] = queue.shift();
    for (let [dr, dc] of dist) {
      let nr = row + dr;
      let nc = col + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        grid[nr][nc] === INF
      ) {
        grid[nr][nc] = grid[row][col] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return grid;
}
