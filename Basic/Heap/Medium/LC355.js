/*
  * 355. Design Twitter

  Design a simplified version of Twitter where users can post tweets, follow/unfollow other users, and view the 10 most recent tweets in their news feed.

  Implement the Twitter class:
  - Twitter() Initializes your Twitter object.
  - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by user userId. Each call to postTweet will have a unique tweetId.
  - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user follows or by the user themself. Tweets must be ordered from most recent to least recent.
  - void follow(int followerId, int followeeId) The user with ID followerId starts following the user with ID followeeId.
  - void unfollow(int followerId, int followeeId) The user with ID followerId stops following the user with ID followeeId.

  Example:
  Input
  ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]
  [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]
  Output
  [null,null,[5],null,null,[6,5],null,[5]]

  Explanation
  Twitter twitter = new Twitter();
  twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
  twitter.getNewsFeed(1); // User 1's news feed returns [5].
  twitter.follow(1, 2); // User 1 follows user 2.
  twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
  twitter.getNewsFeed(1); // User 1's news feed returns [6, 5].
  twitter.unfollow(1, 2); // User 1 unfollows user 2.
  twitter.getNewsFeed(1); // User 1's news feed returns [5].

  Constraints:
  - 1 <= userId, followerId, followeeId <= 500
  - 0 <= tweetId <= 10^4
  - All the tweets have unique IDs.
  - At most 3 * 10^4 calls will be made to postTweet, getNewsFeed, follow, and unfollow.
*/

class Twitter {
  constructor() {
    this.time = 0;
    // userId → [{id, time}] 陣列，存每個用戶的推文
    this.tweets = new Map();
    // followerId → Set(followeeIds)，存追蹤關係
    this.follows = new Map();
  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {
    if (!this.tweets.has(userId)) this.tweets.set(userId, []);
    this.tweets.get(userId).push({ id: tweetId, time: this.time++ });
  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {
    let res = [];
    // 追蹤了那些那些 user
    let users = new Set([userId]);
    if (this.follows.has(userId)) {
      for (let f of this.follows.get(userId)) users.add(f);
    }

    // allTweets: 記錄所有的文章([{id, time}])
    let allTweets = [];
    for (let uid of users) {
      if (this.tweets.has(uid)) {
        allTweets.push(...this.tweets.get(uid));
      }
    }

    allTweets.sort((a, b) => b.time - a.time);

    for (let i = 0; i < Math.min(10, allTweets.length); i++) {
      res.push(allTweets[i].id);
    }

    return res;
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {
    if (followerId === followeeId) return;
    if (!this.follows.has(followerId)) {
      this.follows.set(followerId, new Set());
    }
    this.follows.get(followerId).add(followeeId);
  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {
    if (followerId === followeeId) return;
    if (this.follows.has(followerId))
      this.follows.get(followerId).delete(followeeId);
  }
}
