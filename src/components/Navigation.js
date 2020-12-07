import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Navbar = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  opacity: 0.8;
  font-family: "Raleway";
  font-size: 1.2rem;
  font-weight: lighter;
  width: 100%;
  padding-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: currentColor;

  &:hover {
    text-decoration: underline;
    color: #303030;
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
