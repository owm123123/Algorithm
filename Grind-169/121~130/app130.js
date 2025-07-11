// * Cheapest Flights Within K Stops
// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.
// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

// Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
// Output: 700
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
// Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.

// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
// Output: 200
// Explanation:
// The graph is shown above.
// The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200.

// Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0
// Output: 500
// Explanation:
// The graph is shown above.
// The optimal path with no stops from city 0 to 2 is marked in red and has cost 500.

// Constraints:
// 1 <= n <= 100
// 0 <= flights.length <= (n * (n - 1) / 2)
// flights[i].length == 3
// 0 <= fromi, toi < n
// fromi != toi
// 1 <= pricei <= 104
// There will not be any multiple flights between two cities.
// 0 <= src, dst, k < n
// src != dst

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k // * stops
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = Array.from({ length: n }, () => []);
  for (let [from, to, price] of flights) {
    graph[from].push([to, price]);
  }

  // * 紀錄當前 城市 / 花費 / 步數
  let queue = [[src, 0, 0]]; // [city, cost, stops]
  // ! 記得設定Infinity,因為有可能到不到
  let minCost = Array(n).fill(Infinity);
  minCost[src] = 0;

  while (queue.length) {
    let [city, cost, stops] = queue.shift();
    // * 超過 k 步, continue 掉
    if (stops > k) continue;
    for (let [next, price] of graph[city]) {
      let newCost = cost + price;
      // * 只 queue 小於當前花費的
      // ! 只要 stops 沒超過 k，就允許重複入隊
      if (newCost < minCost[next] && stops <= k) {
        minCost[next] = newCost;
        queue.push([next, newCost, stops + 1]);
      }
    }
  }
  return minCost[dst] === Infinity ? -1 : minCost[dst];
};
