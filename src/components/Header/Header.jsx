import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://avatars.mds.yandex.net/i?id=bef656c24663bc119d6d85e56a19a69f9517eaf7-7546007-images-thumbs&n=13&exp=1" />
      <b>{props.name}&#8482;</b>
    </header>
  );
};

export default Header;
