import React from "react";
import s from "./FriendItem.module.css";

const FriendItem = (props) => {
  return (
    <div className={s.friend}>
      <img className={s.circle} src={props.src} alt="#" />
      <span>{props.name}</span>
    </div>
  );
};

export default FriendItem;
