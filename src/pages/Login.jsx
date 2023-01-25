import LoginForm from 'components/loginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Navigate to={'/'} />
      ) : (
        <section>
          <h1>Login page</h1>
          <LoginForm />
        </section>
      )}
    </>
  );
}
