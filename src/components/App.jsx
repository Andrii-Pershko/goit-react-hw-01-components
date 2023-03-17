import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsListMarkup } from "./FriendsList/FriendsList"

import user from "virtual-back-end/user.json";
import data from "virtual-back-end/data.json";
import friendsList from "virtual-back-end/friends.json";

export const App = () => {
  const { avatar, stats, username, tag, location, } = user;

    return (
    <>
      <Profile
        username={username}
        tag={tag}
        avatar={avatar}
        followers={stats.followers}
        location={location}
        likes={stats.likes}
        views={stats.views}></Profile>
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendsListMarkup friends={friendsList}></FriendsListMarkup>
    </>
  );
};

// sername, tag, location, avatar, followers, views, likes 