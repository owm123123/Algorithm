// * Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

/**
 * * 圖解（以 1→2→3 為例）
 * 遞迴到 3，回傳 3
 * 2.next.next = 2（3 指向 2），2.next = null
 * 1.next.next = 1（2 指向 1），1.next = null
 * 回傳 3（新的頭）
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let newNode = reverseList(head.next);
  // * 反轉指向 -> 把下一個節點的 next 指回自己，實現反轉
  head.next.next = head;
  // * 斷開原本的 next -> 斷開原本的 next，避免成環。
  head.next = null;
  return newNode;
};
