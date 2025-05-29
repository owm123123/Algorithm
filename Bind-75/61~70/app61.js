// * Encode and Decode Strings
// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]

// Input: ["we","say",":","yes"]
// Output: ["we","say",":","yes"]
//-------------------------

class Solution {
  /**
   * @param {string[]} strs // * ["love", "can", "my"]
   * @returns {string}
   * @description // * 用長度+特殊符號分隔，避免內容有特殊字元時出錯
   */
  encode(strs) {
    // ! 注意 join 的用法
    return strs.map((s) => s.length + '#' + s).join('');
  }

  /**
   * @param {string} str // * "3#can4#love2#my"
   * @returns {string[]}
   * @description // * 從頭開始掃，先找到 #，解析出長度，再根據長度取出內容，重複直到結束。
   */
  decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
      let temp = i;
      while (str[temp] != '#') temp++;
      let len = parseInt(str.slice(i, temp));
      result.push(str.slice(temp + 1, temp + 1 + len));
      i = temp + 1 + len;
    }

    return result;
  }
}
