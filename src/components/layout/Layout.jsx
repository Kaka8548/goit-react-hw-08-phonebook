import UserMenu from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, NavList, NavListItem, UserNav } from './Layout.styled';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <UserNav to="/">Home</UserNav>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <UserNav to="login">Login</UserNav>
                </li>
                <li>
                  <UserNav to="register">Register</UserNav>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <UserNav to="contacts">Contacts</UserNav>
                </li>
                <NavListItem>
                  <UserMenu />
                </NavListItem>
              </>
            )}
          </NavList>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
