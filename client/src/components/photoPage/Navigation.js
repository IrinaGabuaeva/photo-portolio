import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, colorPrimary } from "../../Styles";

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

////// STYLES //////

const StyledLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: currentColor;

  &:hover {
    text-decoration: underline;
    color: ${colorPrimary};
    transform: translate(0, -3px);
  }
  &:focus {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
`;
