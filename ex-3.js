//  Start coding here

class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

class PostList {
  constructor(post, addPost) {
    this.post = [];
  }
  addPost(post) {
    this.post.push(post);
  }
  sharePost() {
    console.log(`You've shared post ${post.title} to your friend.`);
  }
}

class Post {
  constructor(id, title, content, comment) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comment = [];
  }
  addComment(comment) {
    this.comment.push(comment);
  }
}

class Comment {
  constructor(id, content, createdBy, like) {
    this.id = id;
    this.content = content;
    this.createdBy = createdBy;
    this.like = 0;
  }
  addlike() {
    this.like += 1;
  }
}

class Facebook {
  constructor(groupList, pageList) {
    this.groupList = [];
    this.pageList = [];
  }
  addGroup(group) {
    this.groupList.push(group);
  }
  addPage(page) {
    this.pageList.push(page);
  }
}

class FacebookPage {
  constructor(name) {
    this.name = name;
  }
}

class FacebookGroup {
  constructor(name) {
    this.name = name;
  }
}

class Notification {
  constructor(id) {
    this.id = id;
  }
  send(comment, post) {
    console.log(
      `Notification: ${comment.createdBy} has just commented on this post—"${post.title}"`
    );
  }
}

const user = new User("1", "Du", "test123@gmail.com");
const postList = new PostList();
const post = new Post("1", "first page", "Blue Yeti");
const commentPost = new Comment("1", "INFY", "Jazz");

postList.addPost(post);
postList.sharePost(1);
post.addComment(post);
// commentPost.addLike();

const facebook = new Facebook();
const facebookPage = new FacebookPage("Page");
const facebookGroup = new FacebookGroup("Group");
const notificationPost = new Notification("1");

facebook.addGroup(facebookGroup);
facebook.addPage(facebookPage);
notificationPost.send(commentPost, post);
console.log(facebook.pageList);
console.log(facebook.groupList);
