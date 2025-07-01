//* Design Add and Search Words Data Structure

// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

// Input
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// Output
// [null,null,null,null,false,true,true,true]

// Explanation
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let c of word) {
    if (!node[c]) node[c] = {};
    node = node[c];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (node, i) => {
    // * 因為最後傳入的是i+1
    if (word.length === i) return !!node.isEnd;
    const c = word[i];

    if (word[i] === '.') {
      // * 這裡要傳入的是 key
      for (let key in node) {
        // ! 注意: 傳入 node[key] = 物件
        // ! 這裡的 key !== 'isEnd' 防止出現 isEnd 時, 不進入 for-each
        if (key !== 'isEnd' && dfs(node[key], i + 1)) return true;
      }
      return false;
    } else {
      if (!node[c]) return false;
      return dfs(node[c], i + 1);
    }
  };

  return dfs(this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
