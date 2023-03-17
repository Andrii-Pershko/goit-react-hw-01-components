import css from './Profile.module.css'
import { addDotInQuantity } from 'utils/add-dot.js'
import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, followers, views, likes }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{addDotInQuantity(followers) }</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{addDotInQuantity(views)}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{addDotInQuantity(likes) }</span>
        </li>
      </ul>
    </div>
  )
};


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}