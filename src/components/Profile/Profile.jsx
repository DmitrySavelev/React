import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <main className={s.content}>
      <ProfileInfo
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
      <MyPosts profilePage={props.profilePage} />
    </main>
  );
};

export default Profile;
