import { Profile } from "./Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";

import user from "virtual-back-end/user.json";
import data from "virtual-back-end/data.json"



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

    </>
  );
};

// sername, tag, location, avatar, followers, views, likes 