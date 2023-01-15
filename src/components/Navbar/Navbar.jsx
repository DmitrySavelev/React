import React from "react";
import { NavLink } from "react-router-dom";
import FriendItems from "./FriendItems/FriendItems";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/Profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Profile
        </NavLink>
      </div>

      <div className={`${s.item}`}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Messages
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="/News"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          News
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="/Music"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Music
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink
          to="/Settings"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Settings
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/Friends" className={s.item}>
          <h1 className={s.article}>Friends</h1>
        </NavLink>
        <FriendItems state={props.state}></FriendItems>
      </div>
    </nav>
  );
};

export default Navbar;
