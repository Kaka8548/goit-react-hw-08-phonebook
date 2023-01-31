import RegisterForm from 'components/registerForm/RegisterForm';
import { RegisterContainer } from './Register.styled';

export default function Register() {
  return (
    <RegisterContainer>
      <section>
        <RegisterForm />
      </section>
    </RegisterContainer>
  );
}
