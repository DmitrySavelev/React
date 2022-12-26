import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      <div>new post</div>
      <div className={s.posts}>
        <Post message="hello" likeCount="10" src='https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg'/>
        <Post message="how are you?" likeCount="15" src="https://cs6.pikabu.ru/avatars/304/v304736.jpg" />
        <Post message="hello" likeCount="10" src='https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg'/>
        <Post message="how are you?" likeCount="15" src="https://cs6.pikabu.ru/avatars/304/v304736.jpg" />
        <Post message="hello" likeCount="10" src='https://cs6.pikabu.ru/avatars/1623/v1623717-464223197.jpg'/>
        <Post message="how are you?" likeCount="15" src="https://cs6.pikabu.ru/avatars/304/v304736.jpg" />
      </div>
    </div>
  );
};

export default MyPosts;
