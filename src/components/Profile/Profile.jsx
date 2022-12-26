import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
console.log(s);

const Profile = () => {
  return (
    <main className={s.content}>
      <div>
        <img
          className={s.img}
          src="https://jooinn.com/images/in-norway-3.jpg"
        />
      </div>
      <div>ava + description</div>
      <textarea></textarea>
      <button>add post</button>
      <MyPosts />
    </main>
  );
};

export default Profile;
