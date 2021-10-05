import PropTypes from 'prop-types';
import classes from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={classes.friend_list}>
      {friends.map(friend => {
        const { name, avatar, isOnline, id } = friend;
        return (
          <li className={classes.item} key={id}>
            <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
