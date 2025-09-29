/*
* 237. Delete Node in a Linked List

There is a singly-linked list node class:
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Note:
- The input node is guaranteed not to be the tail node.
- You will not be given access to the head of the list.

Example 1:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

Example 2:
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

Constraints:
- The number of nodes in the list is in the range [2, 1000].
- -1000 <= Node.val <= 1000
- The value of each node in the list is unique.
- The node to be deleted is not a tail node in the list.
- You will only be given access to the node to be deleted.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
