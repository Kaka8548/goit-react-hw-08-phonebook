import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormLogin,
  FormText,
  LoginButton,
  LoginInput,
} from './LoginForm.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormLogin onSubmit={handleSubmit}>
      <label>
        <FormText>email</FormText>
        <LoginInput
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <FormText>password</FormText>
        <LoginInput
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <LoginButton type="submit">Log in</LoginButton>
    </FormLogin>
  );
}
