import { Profile } from "./Profile/Profile";
import user from "virtual-back-end/user.json";

export const App = () => {
  const { avatar,stats,username, tag, location,  } = user;

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
    </>
  );
};

// sername, tag, location, avatar, followers, views, likes 