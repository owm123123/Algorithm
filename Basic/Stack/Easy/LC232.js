/**
 * 232. Implement Queue using Stacks
 *
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 *
 * Implement the MyQueue class:
 *   - void push(int x) Pushes element x to the back of the queue.
 *   - int pop() Removes the element from the front of the queue and returns it.
 *   - int peek() Returns the element at the front of the queue.
 *   - boolean empty() Returns true if the queue is empty, false otherwise.
 *
 * Notes:
 *   - You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are allowed.
 *   - Depending on your language, stack may be implemented as a list or deque (double-ended queue).
 *
 * Example:
 * MyQueue queue = new MyQueue();
 * queue.push(1);
 * queue.push(2);
 * queue.peek();  // returns 1
 * queue.pop();   // returns 1
 * queue.empty(); // returns false
 */

// Write your implementation below:
class MyQueue {
  constructor() {
    this.inStack = new Array();
    this.outStack = new Array();
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.inStack.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.outStack.length === 0) {
      while (this.inStack.length !== 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  /**
   * @return {number}
   */
  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length !== 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
