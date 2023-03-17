import css from "./FriendsItems.module.css"
import PropTypes from 'prop-types';

export const FriendsItems = ({ friend }) => {
    const {isOnline, avatar, name} = friend

    return (
        <li className={css.item}>
            <span className= {[css[ isOnline ? 'online': 'offline'], css.status].join(' ')}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{ name }</p>
        </li>
    )
};


FriendsItems.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
}