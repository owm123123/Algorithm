// * Asteroid Collision
// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteriod in the array represent their relative position in space.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

/**
 * ! [10, 2, -5, 10]
 * * 2 和 -5 碰撞，2 爆炸
 * * -5 和 10 碰撞，-5 爆炸
 * * = [10, 10]
 */

/**
 * ! [-1, -1, -5, 10]
 * * 負數往左 正數往右 所以都不會交會
 * * = [-1, -1, -5, 10]
 */

// Constraints:
// 2 <= asteroids.length <= 104
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let n of asteroids) {
    let alive = true;
    while (alive && n < 0 && stack.length && stack[stack.length - 1] > 0) {
      if (stack[stack.length - 1] < -n) {
        stack.pop();
      } else if (stack[stack.length - 1] === -n) {
        stack.pop();
        alive = false;
      } else {
        alive = false;
      }
    }
    if (alive) stack.push(n);
  }
  return stack;
};
