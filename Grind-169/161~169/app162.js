// * Bus Routes
// You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.
// For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
// You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.
// Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

// Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
// Output: 2
// Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

// Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
// Output: -1

// Constraints:
// 1 <= routes.length <= 500.
// 1 <= routes[i].length <= 105
// All the values of routes[i] are unique.
// sum(routes[i].length) <= 105
// 0 <= routes[i][j] < 106
// 0 <= source, target < 106

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source === target) return 0;
  // map key: stop, value: bus
  const stopToRoutes = new Map();
  for (let i = 0; i < routes.length; i++) {
    for (let stop of routes[i]) {
      if (!stopToRoutes.has(stop)) {
        stopToRoutes.set(stop, []);
      }
      stopToRoutes.get(stop).push(i);
    }
  }

  let visitedStops = new Set();
  let visitedRoutes = new Set();
  let queue = [source];
  let buses = 0;

  // BFS
  while (queue.length) {
    /**
     * * 自己理解
     * buses++: 可以想像成在stop1 但公車A,公車B都有停stop1,但其實只要加一次
     * * GPT解釋
     * buses++: 每一層 BFS 代表多搭一班公車（不管這層有多少個站點，這些站點都屬於同一輪轉乘）
     * 例如：你在 stop1，這一層可能同時考慮多條公車路線，但只算多搭一次車
     */
    buses++;
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let stop = queue.shift();
      for (let idx of stopToRoutes.get(stop) || []) {
        if (visitedRoutes.has(idx)) continue;
        visitedRoutes.add(idx);
        for (let nextStop of routes[idx]) {
          if (nextStop === target) return buses;
          if (!visitedStops.has(nextStop)) {
            visitedStops.add(nextStop);
            queue.push(nextStop);
          }
        }
      }
    }
  }

  return -1;
};
