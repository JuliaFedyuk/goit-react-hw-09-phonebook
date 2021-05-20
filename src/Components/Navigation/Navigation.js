import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './Navigation.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav className="navigation">
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to={routes.contacts}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
