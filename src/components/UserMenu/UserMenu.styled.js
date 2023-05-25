import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
`;

export const Text = styled.p`
  color: black;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  &.active {
    color: orange;
  }
`;
