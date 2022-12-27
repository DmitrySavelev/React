import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
  { id: 1, message: "hello", likeCount: 22 },
  { id: 2, message: "how are you?", likeCount: 33 },
];

const MyPosts = (props) => {
  return (
    <div className={s.wrapperPosts}>
      <div>new post</div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likeCount={postsData[0].likeCount} src='https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg'/>
        <Post message={postsData[1].message} likeCount={postsData[1].likeCount} src="https://cs6.pikabu.ru/avatars/304/v304736.jpg" />
      </div>
    </div>
  );
};

export default MyPosts;
