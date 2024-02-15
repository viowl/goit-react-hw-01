import Profile from "./Profile/Profile";
import user from "../data/user.json";

import FriendList from "./FriendList/FriendList";
import friends from "../data/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
