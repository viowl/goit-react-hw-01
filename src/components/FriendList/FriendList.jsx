import FriendItem from "../FriendList/FriendItem";

const FriendList = ({ friends }) =>
  friends.map(({ avatar, name, isOnLine, id }) => (
    <FriendItem avatar={avatar} name={name} isOnLine={isOnLine} key={id} />
  ));

export default FriendList;
