import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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