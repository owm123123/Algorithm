/**
 * 2. Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Definition for singly-linked list:
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // TODO: Implement your solution here.
  let carry = 0;
  let dummy = new ListNode(-1);
  let curr = dummy;

  while (l1 || l2 || carry !== 0) {
    let n1 = l1 ? l1.val : 0;
    let n2 = l2 ? l2.val : 0;
    let sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    let node = new ListNode(sum % 10);
    curr.next = node;
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
};
