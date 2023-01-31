import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #ebf8ff;
  padding-left: 40px;
  padding-right: 40px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  border: 2px solid transparent;

  .active {
    color: #3182ce;
    border: 2px solid transparent;
    border-bottom: 2px solid #3182ce;
  }
`;

export const NavListItem = styled.li`
  margin-left: auto;
`;

export const UserNav = styled(NavLink)`
  display: inline-block;
  padding: 30px 0;
`;
