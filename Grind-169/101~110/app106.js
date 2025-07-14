// * Minimum Knight Moves
// In an infinite chessboard, a knight starts at [0, 0].
// Each move, the knight can move in an "L" shape: two squares in one direction and one square in a perpendicular direction (8 possible moves).
// Given two integers x and y, return the minimum number of steps required for the knight to reach [x, y] from [0, 0].
// It is guaranteed that a solution exists.

// Input: x = 5, y = 5
// Output: 4
// Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]

// Constraints:
// -300 <= x, y <= 300

function minKnightMoves(x, y) {
  // * 因為 對稱 所以只考慮第一象限 (節省空間)
  x = Math.abs(x);
  y = Math.abs(y);

  const dirs = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];
  const visited = new Set(); // 'r,c'
  const queue = [[0, 0, 0]]; // r, c, steps
  visited.add('0,0');

  while (queue.length) {
    const [r, c, steps] = queue.shift();
    if (r === x && c === y) return steps;
    for (let [dr, dc] of dirs) {
      let nr = dr + r;
      let nc = dc + c;
      if (nr >= -2 && nc >= -2 && !visited.has(`${nr},${nc}`)) {
        visited.add(`${nr},${nc}`);
        queue.push([nr, nc, steps + 1]);
      }
    }
  }
  return -1;
}
