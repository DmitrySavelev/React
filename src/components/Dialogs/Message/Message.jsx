import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={props.side + " " + "both"}>
      <span className={s.text}>{props.message}</span>
    </div>
  );
};

export default Message;
