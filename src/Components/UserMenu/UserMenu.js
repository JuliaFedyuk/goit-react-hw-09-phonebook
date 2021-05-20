import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  divWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '30px',
  },

  button: {
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    padding: '10px',
    transition: ' 0.3s',
    backgroundColor: 'teal',
    marginLeft: '10px',
    fontWeight: '600',
    color: 'yellow',
  },

  hover: {
    backgroundColor: 'darkRed',
    color: 'white',
    transition: '0.3s',
    transform: 'scale(1.1)',
  },

  img: {
    marginRight: '15px',
  },

  span: {
    fontSize: '24px',
    marginRight: '10px',
    color: 'blue',
  },
};

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div style={styles.divWrapper}>
      <img style={styles.img} src={defaultAvatar} alt="" width="40" />
      <span style={styles.span}>Welcome, {name} </span>
      <button
        className="logoutButton"
        style={styles.button}
        type="button"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
