import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, StyledLink } from "../Styles";

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
