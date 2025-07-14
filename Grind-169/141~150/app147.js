// * Find Median from Data Stream
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.

// Implement the MedianFinder class:
// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]
// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

/**
 * * MinPriorityQueue: leetcode 提供的 最小堆
 * * enqueue: 插入一個元素到堆中
 * * dequeue: 移除並回傳堆頂（最小值）元素
 * * front: 取得堆頂（最小值）元素，不移除
 * ! dequeue: delete + return
 * ! front: get
 *
 * * 最大堆: new MinPriorityQueue({ compare: (a, b) => b - a });
 * ! 這時候的 dequeue & front 都會回傳最大值跟移除最大值
 */

var MedianFinder = function () {
  // ! minHeap 存右半，maxHeap 存左半
  // ! maxHeap：最大堆，存「左半邊」較小的一半數字，堆頂是左半邊的最大值。
  this.maxHeap = new MaxPriorityQueue();
  // ! minHeap：最小堆，存「右半邊」較大的一半數字，堆頂是右半邊的最小值。
  this.minHeap = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  /**
   * * 自我平衡的步驟
   * * maxHeap 也能拿到較小一半的數字，並且維持兩堆的順序性
   * * EX: max: 2, 1 | min: 5, 6, 11 | num: 10
   * * max.enqueue: max: 2, 1, 10(num) | min: 5, 6, 11
   * * max.enqueue: max: 10, 2, 1 | min: 5, 6, 11 (自我平衡)
   * * min.enqueue(max.dequeue): max: 2, 1 | min: 5, 6, 11, 10
   * * min.enqueue(max.dequeue): max: 2, 1 | min: 5, 6, 10, 11 (自我平衡)
   * * if-else: max: 5, 2, 1 | min: 6, 10, 11
   */
  this.maxHeap.enqueue(num);
  this.minHeap.enqueue(this.maxHeap.dequeue());

  if (this.maxHeap.size() < this.minHeap.size()) {
    this.maxHeap.enqueue(this.minHeap.dequeue());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.front();
  } else {
    return (this.maxHeap.front() + this.minHeap.front()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
