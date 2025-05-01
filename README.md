# JavaScript 常用資料結構與方法整理

## ✅ Array 陣列

| 方法                          | 說明                        | Big O     | 用途說明                                 |
|-------------------------------|-----------------------------|-----------|------------------------------------------|
| `arr.push(val)`               | 從尾部加入元素              | O(1)      | Sliding Window、Stack 模擬               |
| `arr.pop()`                   | 移除尾部元素                | O(1)      | Stack 模擬                               |
| `arr.shift()`                 | 移除頭部元素                | O(n)      | Queue 模擬                               |
| `arr.unshift(val)`            | 從頭部加入元素              | O(n)      | Queue 模擬                               |
| `arr.includes(val)`           | 是否包含某元素              | O(n)      | 基礎查找（不如用 Set）                   |
| `arr.indexOf(val)`            | 回傳索引位置                | O(n)      | 查找索引                                 |
| `arr.slice(start, end)`       | 回傳新陣列的一部分          | O(k)      | 複製陣列片段（不改變原陣列）             |
| `arr.splice(start, deleteCount)` | 修改原陣列              | O(n)      | 插入、刪除（會動到原陣列）               |
| `arr.sort()`                  | 排序                        | O(n log n)| 排序型題目                               |
| `arr.reverse()`               | 反轉陣列                    | O(n)      | 雙指標題目反向處理                       |
| `arr.reduce()`                | 聚合運算                    | O(n)      | 加總、最大值、計數等                     |
| `arr.map()`                   | 映射新陣列                  | O(n)      | 處理每一項並返回新陣列                   |
| `arr.filter()`                | 過濾新陣列                  | O(n)      | 篩選資料                                 |
| `arr.forEach()`               | 遍歷陣列                    | O(n)      | 一般遍歷操作                             |
| `[...new Set(arr)]`           | 去除重複                    | O(n)      | 去重技巧（如 union/intersection 題）     |

---

## ✅ Set 集合

| 方法                           | 說明         | Big O |
|--------------------------------|--------------|--------|
| `new Set()`                    | 建立新的 Set | -      |
| `set.has(val)`                 | 判斷是否存在 | O(1)   |
| `set.add(val)`                 | 新增元素     | O(1)   |
| `set.delete(val)`              | 刪除元素     | O(1)   |
| `set.size`                     | 集合大小     | O(1)   |
| `set.clear()`                  | 清空 Set     | O(1)   |
| `Array.from(set)` 或 `[...set]` | 轉陣列       | O(n)   |

---

## ✅ Object 物件

| 方法 / 操作                    | 說明                      | Big O   |
|-------------------------------|---------------------------|---------|
| `obj[key]`                    | 存取值或建立 key-value    | O(1)    |
| `obj[key] = value`            | 設定 key-value            | O(1)    |
| `delete obj[key]`             | 刪除某個 key              | O(1)    |
| `obj.hasOwnProperty(key)`     | 判斷 key 是否存在         | O(1)    |
| `Object.keys(obj)`            | 取所有 keys               | O(n)    |
| `Object.values(obj)`          | 取所有 values             | O(n)    |
| `Object.entries(obj)`         | 取 key-value 陣列         | O(n)    |

---

## ✅ For Loop 遍歷技巧

| 特性           | `for...of`                                | `for...in`                                   |
|----------------|--------------------------------------------|-----------------------------------------------|
| 適用對象       | 可迭代對象（如陣列、字串、Set、Map）     | 對象的可枚舉屬性或陣列索引                   |
| 迭代內容       | 值                                          | 索引或屬性名稱                               |
| 是否適合陣列   | ✅ 是，直接取得值                          | ✅ 是，但獲得索引                             |
| 是否適合對象   | ❌ 否                                       | ✅ 是，適用於列舉屬性                         |

---

## ✅ Counter 記數技巧

> 常見於字元統計、出現次數統計等場景。

```js
// 計數方式
table[num] = (table[num] || 0) + 1;

// 說明
// 若 table[num] 為 undefined，則變成 0，再加 1
// 若 table[num] 已存在，則加 1

// 判斷是否存在
if (!table[num]) {
  // !table[num] 等於 0 或 undefined
}
