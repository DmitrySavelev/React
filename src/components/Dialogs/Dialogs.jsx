import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import FormDialogs from "./FormDialogs/FormDialogs";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} src={d.src} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} side={m.side} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div>
        <FormDialogs
          newPostText={props.dialogsPage.newPostText}
          addPostDialogs={props.addPostDialogs}
          updateNewPostTextDialogs={props.updateNewPostTextDialogs}
        />
        <div className={s.messages}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
