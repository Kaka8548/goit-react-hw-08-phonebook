import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { LogOutButton } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{user.email}</p>
      <LogOutButton type="button" onClick={handleClick}>
        Log out
      </LogOutButton>
    </div>
  );
}
