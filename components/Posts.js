import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption: "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption: "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption: "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption:
        "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption: "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption:
        "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption: "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption:
        "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption: "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
    {
      id: "11",
      username: "ssss",
      userImage: "photos/avatar.jpg",
      img: "photos/1.jpg",
      caption:
        "Test test test test test test test test test test test test test test test test test test test test test test test test test",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
      {posts.map((post) => (
        <Post className="col-span-1 my-0"
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
