import PropTypes from 'prop-types';
import classes from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={classes.status} data-status={isOnline}></span>
      <img className={classes.avatar} src={avatar} alt={name} width="48" />
      <p className={classes.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
