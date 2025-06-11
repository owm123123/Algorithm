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
