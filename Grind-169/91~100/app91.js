// * Odd Even Linked List
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// * The first node is considered odd, and the second node is even, and so on.
// * 這裡有說 fir = odd, sec = even 以此往下
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

// Constraints:
// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106

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
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  // *　even 目前指向偶數節點，even.next 是下一個奇數節點
  // * 如果 even 或 even.next 為 null，代表已經沒有更多節點可處理
  // * 換成 odd && odd.next 也可以
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
