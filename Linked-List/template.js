// 建立虛擬頭節點
let dummy = new ListNode(-1); // 建立虛擬頭節點
let curr = dummy; // 指針指向虛擬頭節點

// 遍歷鏈結串列;
let curr = head;
while (curr !== null) {
  console.log(curr.val); // 訪問當前節點的值
  curr = curr.next; // 移動到下一個節點
}

// linked list 結構
[1, 2, 4];

list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

// 所以只能 重頭 開始搜索
// list.val 當前值
// list.next 下一個node

// 不能修改 val
