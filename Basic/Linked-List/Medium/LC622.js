/*
* 622. Design Circular Queue

Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called a "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implement the MyCircularQueue class:

MyCircularQueue(k): Initializes the object with the size of the queue to be k.
boolean enQueue(int value): Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue(): Deletes an element from the circular queue. Return true if the operation is successful.
int Front(): Gets the front item from the queue. If the queue is empty, return -1.
int Rear(): Gets the last item from the queue. If the queue is empty, return -1.
boolean isEmpty(): Checks whether the circular queue is empty or not.
boolean isFull(): Checks whether the circular queue is full or not.
You must solve the problem without using the built-in queue data structure in your programming language.

Input
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]

Explanation
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
 
Constraints:
1 <= k <= 1000
0 <= value <= 1000
At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.
*/

/*
* Array 環狀佇列（Ring Buffer）：
1. 用一個固定長度的陣列 queue 存資料。
2. 用 front 指向隊首，rear 指向隊尾。
3. 用 size 記錄目前元素數量，方便判斷滿/空。
4. 插入和刪除時，front、rear 都用 % k 來環狀移動。
*/
class MyCircularQueue {
  /**
   * @param {number} k
   */
  constructor(k) {
    this.queue = new Array(k);
    this.k = k;
    // * 因為 dequeue 不會真的刪除 (queue.length 不准)，所以需要用 size 紀錄
    this.size = 0;
    this.front = 0; // 指向隊首元素的位置
    this.rear = 0; // 指向「下一個可插入的位置」
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) return false;
    // ! 先設值在修改是因為處理初始化，不然0會沒有用到
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.k;
    this.size++;
    return true;
  }

  /**
   * @return {boolean}
   */
  // * 環狀佇列設計: 直接覆蓋舊資料，不需要真的刪除元素。 (用 front + rear 來控制)
  deQueue() {
    if (this.isEmpty()) return false;
    // * 實際上並沒有把 queue 裡面的元素刪除，而是用 front rear 覆蓋
    this.front = (this.front + 1) % this.k;
    this.size--;
    return true;
  }

  /**
   * @return {number}
   */
  Front() {
    return this.isEmpty() ? -1 : this.queue[this.front];
  }

  /**
   * @return {number}
   */
  Rear() {
    return this.isEmpty() ? -1 : this.queue[(this.rear - 1 + this.k) % this.k];
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.size === this.k;
  }
}
