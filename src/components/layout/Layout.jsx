import UserMenu from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="login">Login</Link>
                </li>
                <li>
                  <Link to="register">Register</Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li>
                <Link to="contacts">Contacts</Link>
              </li>
            )}
          </ul>
        </nav>
        <UserMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
