import React from "react";
import s from "./FormDialogs.module.css";

const FormDialogs = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPostDialogs();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostTextDialogs(text);
  };

  return (
    <form className={s.formDialogs}>
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
    </form>
  );
};

export default FormDialogs;
