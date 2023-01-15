import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${props.id}`} className={s.item}>
        <div className={s.item}>
          <img src={props.src} className={s.img} alt="#" />
          <span className={s.text}>{props.name}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
