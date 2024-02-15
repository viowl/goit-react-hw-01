const FriendItem = ({ avatar, name, isOnLine, id }) => (
  <li>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
    <p>{isOnLine}</p>
  </li>
);

export default FriendItem;
