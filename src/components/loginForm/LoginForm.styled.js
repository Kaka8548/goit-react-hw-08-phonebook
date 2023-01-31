import styled from 'styled-components';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 20px;
`;

export const FormText = styled.p`
  margin-bottom: 5px;
`;

export const LoginInput = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #90cdf4;
  border-radius: 5px;
  padding: 10px;
`;

export const LoginButton = styled.button`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b6cb0;
  color: #fff;
  border-radius: 5px;
`;
