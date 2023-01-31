import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  & + & {
    margin-top: 15px;
  }
`;

export const ItemBtn = styled.button`
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b6cb0;
  color: #fff;
  border-radius: 5px;
`;
