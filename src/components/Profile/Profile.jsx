import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <main className={s.content}>
      <ProfileInfo
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
      <MyPosts profilePage={props.profilePage} />
    </main>
  );
};

export default Profile;
