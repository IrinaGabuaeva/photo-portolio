import { StyledLink, Navbar } from "../Styles";

function Navigation(props) {
  return (
    <Navbar classname="navbar">
      <StyledLink to="/people">People</StyledLink>
      <StyledLink to="/nyc">NYC</StyledLink>
      <StyledLink to="/nature">Nature</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Navbar>
  );
}

export default Navigation;
