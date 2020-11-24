import { Switch, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledLink, Navbar } from "../Styles";
import People from "./People";
import Nyc from "./NYC";
import Nature from "./Nature";
import About from "./About";

function Navigation(props) {
  return (
    <Navbar>
      <StyledLink to="/people">People</StyledLink>
      <StyledLink to="/nyc">NYC</StyledLink>
      <StyledLink to="/nature">Nature</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </Navbar>
  );
}

// return (
//   <div class="navigation">
//     <a href="#" class="menu-item">
//       People
//     </a>
//     <a href="#" class="menu-item">
//       NYC
//     </a>
//     <a href="#" class="menu-item">
//       Nature
//     </a>
//     <a href="#" class="menu-item">
//       About
//     </a>
//   </div>
// );

export default Navigation;
