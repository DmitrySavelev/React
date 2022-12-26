import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.img} src={props.src} />
      <span> {props.message}</span>
      <span>{props.likeCount} &#10084;</span>
    </div>
  );
};

export default Post;
