import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import s from "./FriendItems.module.css";

const FriendItems = (props) => {
  let friendsElements = props.state.sideBar.friends.map((f, index) => (
    <FriendItem key={index} id={f.id} name={f.name} src={f.src} />
  ));
  return (
    <div>
      <div className={s.friends}>{friendsElements}</div>
    </div>
  );
};

export default FriendItems;
