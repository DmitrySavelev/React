import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((p, i) => (
    <Post key={i} message={p.message} likeCount={p.likeCount} src={p.src} />
  ));

  return (
    <div className={s.wrapperPosts}>
      <div>new post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
