/*
* 143. Reorder List

Given the head of a singly linked list, reorder the list as follows:
L0 → L1 → … → Ln-1 → Ln
to
L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

You may not modify the values in the list's nodes, only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Constraints:
- The number of nodes in the list is in the range [1, 5 * 10^4].
- 1 <= Node.val <= 1000

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head && !head.next) return;

  let slow = head;
  let fast = head;

  // 找到中間值的方法 => slow 為中間值
  while (fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 將後半段反轉
  let second = slow.next; // 正向後半段
  slow.next = null; // 設定前半段
  let prev = null; // 組成反向後半段

  while (second) {
    let nextNode = second.next;
    second.next = prev;
    prev = second;
    second = nextNode;
  }

  // 合併兩部分鏈結串列
  let first = head;
  second = prev;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }

  return head;
};
