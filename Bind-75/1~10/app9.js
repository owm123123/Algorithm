// * Merge K Sorted Linked Lists
// You are given an array of k linked lists lists, where each list is sorted in ascending order.
// Return the sorted linked list that is the result of merging all of the individual linked lists.

// Input: lists = [[1,2,4],[1,3,5],[3,6]]
// Output: [1,1,2,3,3,4,5,6]

// Input: lists = []
// Output: []

// Input: lists = [[]]
// Output: []

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   * @description // * min heap : priority queue
   */
  mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;

    // ! 因為 MinPriorityQueue 比對是數字, 所以物件記得用 compare 進行比對
    let minHeap = new MinPriorityQueue({ compare: (a, b) => a.val - b.val });

    // ! 這個只放入每個 head node 而已喔
    for (let node of lists) {
      if (node) minHeap.enqueue(node);
    }

    const dummy = new ListNode(0);
    let curr = dummy;

    while (!minHeap.isEmpty()) {
      const node = minHeap.dequeue();
      curr.next = node;
      curr = curr.next;
      // ! 將 node 的 next 放入 heap 裡
      if (node.next) minHeap.enqueue(node.next);
    }

    return dummy.next;
  }
}

// * 下面為 neetcode 解答, 須自己實作 heap
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(node) {
    this.heap.push(node);
    this._bubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown(0);
    return top;
  }
  _bubbleUp(i) {
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[p].val <= this.heap[i].val) break;
      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }
  _bubbleDown(i) {
    let n = this.heap.length;
    while (true) {
      let l = 2 * i + 1,
        r = 2 * i + 2,
        min = i;
      if (l < n && this.heap[l].val < this.heap[min].val) min = l;
      if (r < n && this.heap[r].val < this.heap[min].val) min = r;
      if (min === i) break;
      [this.heap[i], this.heap[min]] = [this.heap[min], this.heap[i]];
      i = min;
    }
  }
  size() {
    return this.heap.length;
  }
}

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;
    let minHeap = new MinHeap();

    for (let node of lists) {
      minHeap.push(node);
    }

    const dummy = new ListNode(-1);
    let curr = dummy;

    while (minHeap.size() !== 0) {
      let node = minHeap.pop();
      curr.next = node;
      curr = curr.next;
      if (node) minHeap.push(node.next);
    }

    return dummy.next;
  }
}
