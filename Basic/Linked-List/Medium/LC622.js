/**
 * * 622. Design Circular Queue
 *
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 *
 * Implement the MyCircularQueue class:
 *
 * - MyCircularQueue(k) Initializes the object with the size of the queue to be k.
 * - int Front() Gets the front item from the queue. If the queue is empty, return -1.
 * - int Rear() Gets the last item from the queue. If the queue is empty, return -1.
 * - boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
 * - boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
 * - boolean isEmpty() Checks whether the circular queue is empty or not.
 * - boolean isFull() Checks whether the circular queue is full or not.
 *
 * Example:
 * MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
 * circularQueue.enQueue(1); // return true
 * circularQueue.enQueue(2); // return true
 * circularQueue.enQueue(3); // return true
 * circularQueue.enQueue(4); // return false, the queue is full
 * circularQueue.Rear(); // return 3
 * circularQueue.isFull(); // return true
 * circularQueue.deQueue(); // return true
 * circularQueue.enQueue(4); // return true
 * circularQueue.Rear(); // return 4
 *
 * Constraints:
 * - 1 <= k <= 1000
 * - 0 <= value <= 1000
 * - At most 2000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, isFull.
 */

// Write your MyCircularQueue class implementation below:
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
    this.front = 0;
    this.rear = 0;
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

// * Linked List
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyCircularQueue {
  constructor(k) {
    this.k = k;
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  enQueue(value) {
    if (this.isFull()) return false;
    const node = new ListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      node.next = node; // 環狀
    } else {
      node.next = this.head;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.size--;
    return true;
  }

  Front() {
    return this.isEmpty() ? -1 : this.head.val;
  }

  Rear() {
    return this.isEmpty() ? -1 : this.tail.val;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.k;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
