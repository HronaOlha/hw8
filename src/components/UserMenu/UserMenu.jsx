import { getUsername } from 'redux/auth/auth-selectors';
import { Container, Text, StyledLink } from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUsername);

  return (
    <>
      <Container>
        <StyledLink to="/contacts">Contacts</StyledLink>
        <Text>Welcome!{user}</Text>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </Container>
    </>
  );
};

export default UserMenu;
