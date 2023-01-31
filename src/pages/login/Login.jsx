import LoginForm from 'components/loginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { LoginContainer } from './Login.styled';

export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <LoginContainer>
      {isLoggedIn ? (
        <Navigate to={'/'} />
      ) : (
        <section>
          <LoginForm />
        </section>
      )}
    </LoginContainer>
  );
}
