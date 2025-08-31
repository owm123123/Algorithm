/*
* 211. Design Add and Search Words Data Structure

Design a data structure that supports adding new words and finding if a string matches any previously added word. Implement the WordDictionary class:

- WordDictionary() Initializes the object.
- void addWord(word) Adds word to the data structure, it can be matched later.
- bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain '.' where '.' can be matched with any letter.

Example:
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

Constraints:
- 1 <= word.length <= 25
- word in addWord consists of lowercase English letters.
- word in search consists of '.' or lowercase English letters.
- At most 10^4 calls will be made to addWord and search.

*/

class TrieNode {
  constructor() {
    this.child = {};
    this.end = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.child[c]) {
        node.child[c] = new TrieNode();
      }
      node = node.child[c];
    }
    node.end = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let dfs = (node, i) => {
      if (i === word.length) return node.end;
      let c = word[i];
      if ('.' === c) {
        for (let key in node.child) {
          if (dfs(node.child[key], i + 1)) return true;
        }
        return false;
      } else {
        if (!node.child[c]) return false;
      }
      return dfs(node.child[c], i + 1);
    };

    return dfs(this.root, 0);
  }
}
