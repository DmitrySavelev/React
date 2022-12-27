import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <main className={s.content}>
      <ProfileInfo />
      <MyPosts />
    </main>
  );
};

export default Profile;
