import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return (
    <>
      <div>Home Page</div>
      {isLoggedIn && !isRefreshing && <p>Welcome, {user.name}!</p>}
      {!isLoggedIn && !isRefreshing && (
        <p>Hi, please log in or register to use phonebook</p>
      )}
    </>
  );
}
