import PropTypes from 'prop-types';
import { FriendsItems } from 'components/FriendsItems/FriendsItems'
import css from './FriendsList.module.css'

export const FriendsListMarkup = ({ friends }) => {
    
    
    return (
        <ul className={css["friend-list"]}>
            {friends.map(friend => {
                const {id} = friend
                return (<FriendsItems key={id} friend={friend}></FriendsItems>)
            })}
        </ul>
    )
};


FriendsListMarkup.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    
}