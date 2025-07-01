// * Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Input: head = []
// Output: []

// Input: head = [1]
// Output: [1]

// Input: head = [1,2,3]
// Output: [2,1,3]

// Constraints:
// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  while (prev.next && prev.next.next) {
    let a = prev.next;
    let b = prev.next.next;
    prev.next = b;
    a.next = b.next;
    b.naxt = a;
    prev = a;
  }
  return dummy.next;
};
