import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 20px;
  margin: 20px auto;
`;

export const InputTitle = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid #90cdf4;
  border-radius: 5px;
  padding: 10px;
`;

export const AddContactBtn = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b6cb0;
  color: #fff;
  border-radius: 5px;
`;
