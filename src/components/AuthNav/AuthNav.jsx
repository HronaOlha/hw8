import { StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </>
  );
};

export default AuthNav;
