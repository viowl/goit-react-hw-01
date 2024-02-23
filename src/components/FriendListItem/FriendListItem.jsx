import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const textColor = clsx(css.textSize, isOnline ? css.isOnline : css.isOffline);
  return (
    <div className={css.listItemContaner}>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={textColor}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
