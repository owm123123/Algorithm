// * Word Search II
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Input:
// board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
// words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// Input:
// board = [["a","b"],["c","d"]]
// words = ["abcb"]
// Output: []

class TrieNode {
  constructor() {
    this.children = {};
    // 如果這裡有單字，代表這是單字結尾
    this.word = null;
  }
}

function buildTrie(words) {
  const root = new TrieNode();
  for (let word of words) {
    // * 每個 word 都要從頭開始添加
    let node = root;
    for (let c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.word = word;
  }
  return root;
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 * @description // * trie + dfs + backTrack
 */
var findWords = function (board, words) {
  let res = [];
  let root = buildTrie(words);
  let rows = board.length;
  let cols = board[0].legnth;

  let dfs = (r, c, node) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || !node.children[board[r][c]])
      return;

    // ! 回溯時使用
    const char = board[r][c];
    node = node.children[char];
    // * node 存在 word 表示結尾出現
    if (node.word) {
      res.push(node.word);
      node.word = null; // ! 避免重複加入
    }

    board[r][c] = '#';
    dfs(r + 1, c, node);
    dfs(r - 1, c, node);
    dfs(r, c + 1, node);
    dfs(r, c - 1, node);
    board[r][c] = char;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }

  return res;
};
