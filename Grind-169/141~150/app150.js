// * Maximum Profit in Job Scheduling
// We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].
// You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.
// If you choose a job that ends at time X you will be able to start another job that starts at time X.

// Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
// Output: 120
// Explanation: The subset chosen is the first and fourth job.
// Time range [1-3]+[3-6] , we get profit of 120 = 50 + 70.

// Input: startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]
// Output: 150
// Explanation: The subset chosen is the first, fourth and fifth job.
// Profit obtained 150 = 20 + 70 + 60.

// Input: startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]
// Output: 6

// Constraints:
// 1 <= startTime.length == endTime.length == profit.length <= 5 * 104
// 1 <= startTime[i] < endTime[i] <= 109
// 1 <= profit[i] <= 104

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length;
  let jobs = []; // * [start, end, profit]
  for (let i = 0; i < n; i++) {
    jobs.push([startTime[i], endTime[i], profit[i]]);
  }
  jobs.sort((a, b) => a[1] - b[1]);

  // * dp 記錄每一條 + 前面最大的profit
  let dp = [[-1, 0]]; // [endTime, maxProfit]
  let res = 0;

  for (let i = 0; i < n; i++) {
    let curr = res;
    /**
     * * 二分搜尋找到最後一個 endTime <= jobs[i][0]
     * * 這代表你可以在這個工作前，最多拿到 dp[r][1] 的利潤
     * * 因為每個 dp 是紀錄 maxProfit
     */
    let l = 0;
    let r = dp.length - 1;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (dp[m][0] <= jobs[i][0]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    curr = Math.max(curr, dp[r][1] + jobs[i][2]);
    dp.push([jobs[i][1], curr]);
    res = Math.max(res, curr);
  }
  return res;
};
