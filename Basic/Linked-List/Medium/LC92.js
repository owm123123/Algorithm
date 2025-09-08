/*
* 92. Reverse Linked List II

Given the head of a singly linked list and two integers left and right where left <= right,
reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

Constraints:
- The number of nodes in the list is n.
- 1 <= n <= 500
- -500 <= Node.val <= 500
- 1 <= left <= right <= n

Definition for singly-linked list:
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
*/

function reverseBetween(head, left, right) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;

  // [1,2,3,4,5], left = 2, right = 4
  // [1,4,3,2,5]
  // prev = 1
  // * 只動到 reverse 前一個, 因為要紀錄 到時候再接起來
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // curr = 2
  let curr = prev.next;
  let pre = null;
  for (let i = left; i <= right; i++) {
    let temp = curr;
    curr = curr.next;
    temp.next = pre;
    pre = temp;
  }

  // curr = 5, prev = 1
  /*
   * [1 2 3 4 5] -> prev.next.next = curr -> [1 2 5]
   * 反轉前：1 -> 2 -> 3 -> 4 -> 5
   * 反轉後（還沒接）：1 -> 4 -> 3 -> 2（2 的 next 還沒接 5）
   * 這行就是把 2.next = 5。
   */
  prev.next.next = curr;

  /*
   * [1 2 5] -> prev.next = pre -> [1 4 3 2 5]
   * 1 -> 2 -> 3 -> 4 -> 5
   * 反轉後：1 -> 4 -> 3 -> 2 -> 5
   * 這行就是把 1.next = 4。
   */
  prev.next = pre;

  return dummy.next;
}
