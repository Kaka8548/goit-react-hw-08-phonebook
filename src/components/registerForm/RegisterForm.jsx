import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormRegister,
  FormText,
  RegisterButton,
  RegisterInput,
} from './RegisterForm.styled';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormRegister onSubmit={handleSubmit}>
      <label>
        <FormText>name</FormText>
        <RegisterInput
          name="name"
          type="text"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <FormText>email</FormText>
        <RegisterInput
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <FormText>password</FormText>
        <RegisterInput
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <RegisterButton type="submit">register</RegisterButton>
    </FormRegister>
  );
}
