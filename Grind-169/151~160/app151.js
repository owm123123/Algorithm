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

// * Divide and Conquer (最佳解)
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
 * @description // * Divide and Conquer
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    let merged = [];
    let size = lists.length;

    // * i += 2 是精隨
    for (let i = 0; i < size; i += 2) {
      const l1 = i;
      const l2 = i + 1 < size ? lists[i + 1] : null;
      merged.push(mergeLists(l1, l2));
    }

    lists = merged;
  }

  return lists[0];
};

function mergeLists(l1, l2) {
  const dummy = ListNode();
  let curr = dummy;
  while (l1 !== null || l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 === null ? l2 : l1;
  return dummy.next;
}

// minHeap 簡易版本
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
