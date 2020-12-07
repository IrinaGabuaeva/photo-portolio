import { StyledLink, Navbar } from "../Styles";

function Navigation(props) {
  return (
    <Navbar classname="navbar">
      <StyledLink to="/art/people">People</StyledLink>
      <StyledLink to="/art/nyc">NYC</StyledLink>
      <StyledLink to="/art/nature">Nature</StyledLink>
      <StyledLink to="/art/about">About</StyledLink>
    </Navbar>
  );
}

export default Navigation;
