import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
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
        <textarea></textarea>
      </div>
      <div>
        <button>add post</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
