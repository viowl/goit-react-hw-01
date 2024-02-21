// import FriendListItem from "../FriendListItem/FriendListItem";
// const FriendList = (friends) => {
//   return (
//     <ul>
//       {friends.map((friend) => (
//         <li>
//           <FriendListItem
//             avatar={friend.avatar}
//             name={friend.name}
//             isOnLine={friend.isOnLine}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default FriendList;

// // const FriendList = () => console.log(12);

// // export default FriendList;

// import css from "./FriendList.module.css";
// import FriendListItem from "../FriendListItem/FriendListItem";

// export const FriendList = ({ friends }) => {
//   return (
//     <ul className={css.list}>
//       {friends.map((friend) => (
//         <li key={friend.id} className={css.listItem}>
//           <FriendListItem
//             avatar={friend.avatar}
//             name={friend.name}
//             isOnline={friend.isOnline}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default FriendList;
import FriendListItem from "../FriendListItem//FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.listItem}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
