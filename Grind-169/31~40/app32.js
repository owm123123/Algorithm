// * Reverse Linked List
// * 影片參考: https://www.geeksforgeeks.org/dsa/reverse-a-linked-list/
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
  // * 目前正在處理的節點
  let curr = head;
  // * 已經反轉好的前一個節點
  let prev = null;
  // * 暫存 curr 的下一個節點，避免指標斷掉
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
