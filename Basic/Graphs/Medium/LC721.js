/*
* 721. Accounts Merge

Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:
Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's accounts are merged because they have the common email "johnsmith@mail.com".
The third John's account is not merged because it doesn't share any email with the other two accounts.
The result consists of three accounts after merging. The emails of each account are sorted.

Example 2:
Input: accounts = [["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]
Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]

Constraints:
1 <= accounts.length <= 1000
2 <= accounts[i].length <= 10
1 <= accounts[i][j].length <= 30
accounts[i][0] consists of English letters.
accounts[i][j] (for j > 0) is a valid email.
*/

/*
* 解題思路
1. 建圖
// graph: 將 email 視為節點，如果兩個 email 在同一帳戶中，它們之間有邊
graph = {
  "email1": ["email2", "email3"],
  "email2": ["email1"],
  "email3": ["email1"]
}
// emailToName

2. DFS 找連通分量
// 對每個未訪問的 email 執行 DFS，找出所有連通的 email

3. 重建帳戶
// 將每個連通分量組成一個帳戶，email 排序
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
var accountsMerge = function (accounts) {
  // 1. 建構圖和映射
  let graph = new Map(); // email -> [相鄰 emails]
  let emailToName = new Map(); // email -> name

  // 建構圖
  for (let account of accounts) {
    let name = account[0];
    let emails = account.slice(1);

    // 記錄 email 對應的名字
    for (let email of emails) {
      emailToName.set(email, name);
      if (!graph.has(email)) {
        graph.set(email, []);
      }
    }

    // 建立邊：同一帳戶中的 email 彼此相連
    for (let i = 0; i < emails.length; i++) {
      for (let j = i + 1; j < emails.length; j++) {
        graph.get(emails[i]).push(emails[j]);
        graph.get(emails[j]).push(emails[i]);
      }
    }
  }

  // 2. DFS 找連通分量
  let visited = new Set();
  let result = [];

  const dfs = (email, component) => {
    visited.add(email);
    component.push(email);

    for (let neighbor of graph.get(email)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, component);
      }
    }
  };

  // 3. 遍歷所有 email，找連通分量
  for (let email of graph.keys()) {
    if (!visited.has(email)) {
      let component = [];
      dfs(email, component);

      // 排序 emails 並加入結果
      component.sort();
      let name = emailToName.get(component[0]);
      result.push([name, ...component]);
    }
  }

  return result;
};
