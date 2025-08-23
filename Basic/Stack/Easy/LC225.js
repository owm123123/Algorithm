/**
 * 225. Implement Stack using Queues
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a standard stack (push, top, pop, and empty).
 *
 * Implement the MyStack class:
 *   - void push(int x) Pushes element x to the top of the stack.
 *   - int pop() Removes the element on the top of the stack and returns it.
 *   - int top() Returns the element on the top of the stack.
 *   - boolean empty() Returns true if the stack is empty, false otherwise.
 *
 * Notes:
 *   - You must use only standard operations of a queue, which means only push to back, peek/pop from front, size, and is empty operations are valid.
 *   - Depending on your language, queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue).
 *
 * Example:
 *   Input
 *     ["MyStack", "push", "push", "top", "pop", "empty"]
 *     [[], [1], [2], [], [], []]
 *   Output
 *     [null, null, null, 2, 2, false]
 *
 * Constraints:
 *   - 1 <= x <= 9
 *   - At most 100 calls will be made to push, pop, top, and empty.
 */

// Write your MyStack class below:
class MyStack {
  constructor() {
    this.stack = new Array();
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
