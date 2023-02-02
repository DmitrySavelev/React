import s from "./ProfileInfo.module.css";
import React, { createRef } from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../redux/state";

const ProfileInfo = (props) => {
  const newPostElement = React.useRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={s.wrapperProfile}>
      <div>
        <img
          className={s.img}
          src="https://jooinn.com/images/in-norway-3.jpg"
        />
      </div>
      <div>ava + description</div>
      <div>
        <textarea
          placeholder="введите сообщение"
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>add post</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
