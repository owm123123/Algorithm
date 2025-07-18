// * Maximum Frequency Stack
// Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

// Implement the FreqStack class:
// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val onto the top of the stack.
// int pop() removes and returns the most frequent element in the stack.
// If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.

// Input
// ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
// [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// Output
// [null, null, null, null, null, null, null, 5, 7, 5, 4]

// Explanation
// FreqStack freqStack = new FreqStack();
// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].

// Constraints:
// 0 <= val <= 109
// At most 2 * 104 calls will be made to push and pop.
// It is guaranteed that there will be at least one element in the stack before calling pop.

var FreqStack = function () {
  // * 記錄每個數字出現的次數（val → freq）
  this.freqMap = new Map();
  // * 記錄每個頻率對應的 stack（freq → [val, val, ...]）
  this.groupMap = new Map();
  // * 記錄目前 stack 中的最大頻率
  this.maxFreq = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  let freq = (this.freqMap.get(val) || 0) + 1;
  this.freqMap.set(val, freq);
  this.maxFreq = Math.max(this.maxFreq, freq);
  if (!this.groupMap.has(freq)) this.groupMap.set(freq, []);
  this.groupMap.get(freq).push(val);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  let stack = this.groupMap.get(this.maxFreq);
  let val = stack.pop();
  this.freqMap.set(val, this.freqMap.get(val) - 1);
  if (stack.length === 0) {
    while (this.maxFreq > 0 && !this.groupMap.get(this.maxFreq)?.length) {
      this.maxFreq--;
    }
  }
  return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
