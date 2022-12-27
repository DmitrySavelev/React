import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";

let dialogs = [
  { id: 1, name: "Dimas" },
  { id: 2, name: "Oleg" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Stas" },
  { id: 5, name: "Natalia" },
];

let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How r u?" },
  { id: 3, message: "Fine" },
];

let dialogsElements = dialogs.map((d) => (
  <DialogItem id={d.id} name={d.name} />
));
let messagesElements = messages.map((m) => <Message text={m.message} />);

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
