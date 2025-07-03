// * Sort List
// Given the head of a linked list, return the list after sorting it in ascending order.

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Input: head = []
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

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
var sortList = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let prev = null;
  // * 找終點
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // * 所以現在的 head 就是左半部了
  prev.next = null;
  let l1 = sortList(head);
  let l2 = sortList(slow);
  return merge(l1, l2);
};

function merge(l1, l2) {
  let dummy = new ListNode();
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      l2 = l2.next;
    } else {
      curr.next = l1;
      l1 = l1.next;
    }
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  } else {
    curr.next = l2;
  }
  return dummy.next;
}
