//  Start coding here
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(posts) {
    this.posts = posts;
  }

  addPost(newPost) {
    this.posts.push(newPost);
  }

  sharePost(index = this.posts.length - 1) {
    if (index >= 0 && index < this.posts.length) {
      const postToShare = this.posts[index];
      console.log(`You've shared post "${postToShare.title}" to your friend.`);
    } else {
      console.log("Invalid post index.");
    }
  }
}

const myPostList = new PostList([
  { title: "My first post", content: "This is my exciting journey!" },
  {
    title: "Learning something new",
    content: "I'm picking up a new skill today!",
  },
]);
const newPost = {
  title: "Sharing my thoughts",
  content: "Feeling grateful for this beautiful day.",
};
myPostList.addPost(newPost);
console.log(myPostList.posts);
myPostList.sharePost(0);

class Post {
  constructor(id, title, content, comment, addComment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = comment;
  }
  addComment(newComment) {
    this.comment.push(newComment);
  }
}

// const myPost = new Post(1, "My Post Title", "This is the post content", []);
// myPost.addComment("This is a new comment");
// console.log(myPost.comment);

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addLike(newLike = 1) {
    this.like += newLike;
  }
}

// const myComment = new Comment(1, "This is a great comment!", "John Doe");
// myComment.addLike();
// myComment.addLike();
// console.log(myComment)

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = groupList;
    this.pageList = pageList;
  }
  addGroup(addNewGroup) {
    this.groupList.push(addNewGroup);
  }
  addPage(addNewPage) {
    this.pageList.push(addNewPage);
  }
}

// const myGroupList = new Facebook(
//   [{ groupList: "First Group" }, { groupList: "Second Group" }],
//   [{ pageList: "First Page" }, { pageList: "Second Page" }]
// );
// myGroupList.addGroup({ groupList: "Third Group" });
// console.log(myGroupList.groupList);

class FacebookPage {
  constructor(name) {}
}
class FacebookGroup {
  constructor(name) {}
}
class Notification {
  constructor(id) {}
  send() {
    console.log(
      `Notification: <comment-createdBy> has just commented on this post—"<post-title>”`
    );
  }
}
