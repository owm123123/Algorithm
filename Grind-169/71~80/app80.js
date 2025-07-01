// * Shortest Path to Get Food
// Given a 2D array representing the coordinates on the map, there are only values 0, 1, 2 on the map.
// * value 0 means that it can pass, value 1 means not passable, value 2 means target place.
// 0：可以通過（可走的路） 1：不能通過（障礙物） 2：目標地點（終點）
// Starting from the coordinates [0,0],You can only go up, down, left and right. Find the shortest path that can reach the destination, and return the length of the path.

// Input:
// [
//  [0, 0, 0],
//  [0, 0, 1],
//  [0, 0, 2]
// ]
// Output: 4
// Explanation: [0,0] -> [1,0] -> [2,0] -> [2,1] -> [2,2]

// Input:
// [
//     [0,1],
//     [0,1],
//     [0,0],
//     [0,2]
// ]
// Output: 4
// Explanation: [0,0] -> [1,0] -> [2,0] -> [3,0] -> [3,1]

export class Solution {
  /**
   * @param targetMap:
   * @return:
   * @description // * BFS + queue + steps = 最短路徑模板
   */
  shortestPath(targetMap) {
    // Write your code here
    let rows = targetMap.length;
    let cols = targetMap[0].length;
    let queue = [[0, 0, 0]]; // * [row, col, steps]
    let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[0][0] = true;
    let dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length) {
      let [r, c, steps] = queue.shift();
      if (targetMap[r][c] === 2) return steps;
      for (let [dr, dc] of dirs) {
        let nr = dr + r;
        let nc = dc + c;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          !visited[nr][nc] &&
          targetMap[nr][nc] !== 1
        ) {
          visited[nr][nc] = true;
          queue.push([nr, nc, steps + 1]);
        }
      }
    }
    return -1;
  }
}
