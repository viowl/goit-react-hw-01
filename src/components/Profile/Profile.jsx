import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.userWrap}>
      <div className={css.user}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
