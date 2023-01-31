import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';
import { HomeContainer } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return (
    <HomeContainer>
      {isLoggedIn && !isRefreshing && <p>Welcome, {user.name}!</p>}
      {!isLoggedIn && !isRefreshing && (
        <p>Hi, please log in or register to use phonebook</p>
      )}
    </HomeContainer>
  );
}
