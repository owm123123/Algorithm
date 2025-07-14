// * Design Hit Counter
// In this question, you need to design a HitCounter class.
// In this class, there are the following functions:

// HitCounter(): No-argument constructor
// void hit(int timestamp): Indicates that a tap occurs at the specified time
// int getHits(int timestamp): Returns the total number of hits within 300 seconds before the specified time
// Input: ["hit(1)", "hit(2)", "hit(3)", "getHits(3)", "hit(301)", "getHits(301)"]
// Output: [null, null, null, 3, null, 3]

// Input: ["hit(1)", "hit(1)", "hit(1)", "getHits(2)"]
// Output: [null, null, null, 3]

// HitCounter counter = new HitCounter();
// counter.hit(1);
// counter.hit(2);
// counter.hit(3);
// counter.getHits(4);    // 回傳 3
// counter.hit(300);
// counter.getHits(300);  // 回傳 4
// counter.getHits(301);  // 回傳 3

var HitCounter = function () {
  this.queue = [];
};

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.queue.push(timestamp);
};

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  // 移除超過 300 秒前的點擊
  while (this.queue.length && this.queue[0] <= timestamp - 300) {
    this.queue.shift();
  }
  return this.queue.length;
};
