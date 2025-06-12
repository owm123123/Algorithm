// * Merge K Sorted Linked Lists
// You are given an array of k linked lists lists, where each list is sorted in ascending order.
// ! 這裡有告訴你每個 list 已經 sorted 過了
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

// * 最佳實踐 (Todo 待了解)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const merged = [];
    const size = lists.length;

    for (let i = 0; i < size; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      merged.push(mergeLists(l1, l2));
    }

    lists = merged;
  }

  return lists[0];
};

function mergeLists(l1, l2) {
  const head = new ListNode(0);
  let cur = head;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 === null ? l2 : l1;
  return head.next;
}

// * heap 簡易版本
class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   * @description // * min heap : priority queue
   * // ! 在 leetcode跑不過
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
      // ! 要注意 lists 是一個 ListNode[] 喔
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
