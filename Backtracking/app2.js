// Check if a given string is sum-string

// Given a string of digits, determine whether it is a ‘sum-string’. A string S is called a sum-string if the rightmost substring can be written as the sum of two substrings before it and the same is recursively true for substrings before it.

// “12243660” is a sum string.
// Explanation : 24 + 36 = 60, 12 + 24 = 36

// “1111112223” is a sum string.
// Explanation: 111+112 = 223, 1+111 = 112

// “2368” is not a sum string

// ---------------------------------------------------------
// 步驟:
// 1.劃分字串：
// 將字串劃分為三部分：
// 第一部分：num1。
// 第二部分：num2。
// 第三部分：sum。
// 檢查 num1 + num2 === sum 是否成立。

// 2.遞歸檢查：
// 如果 num1 + num2 === sum 成立，則繼續檢查 num1 和 num2 是否可以遞歸地滿足條件。

// 3.剪枝：
// 如果某次劃分不成立，則提前返回 false，避免不必要的計算。

// 4.處理前導零：
// 如果某個子字串有前導零（例如 "012"），則直接跳過，因為這不是有效的數字。
// ---------------------------------------------------------
sumStr('12243660');
sumStr('1111112223');
sumStr('2368');

function sumStr(str) {
  const backtrack = (index) => {};

  for (let i = 1; i < str.length; i++) {
    if (backtrack(i)) {
      return true;
    }
  }

  return false;
}
