import styled from "styled-components";
import {
  Navbar,
  colorPrimary,
  colorWhite,
  colorBlack,
  Button,
} from "../Styles";
import { Link, animateScroll as scroll } from "react-scroll";

export default function DevNavigation(props) {
  return (
    <DevNavbar>
      <DevLink
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        About
      </DevLink>
      <DevLink
        to="projects"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </DevLink>
      <DevLink
        to="skills"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Skills
      </DevLink>
      <DevLink
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Contact
      </DevLink>
      <Button onClick={() => props.toggle()} color={props.mode.buttonColor}>
        {props.mode.buttonText}
      </Button>
    </DevNavbar>
  );
}

////// STYLES //////

const DevNavbar = styled(Navbar)`
  background-color: ${colorBlack};
  position: sticky;
  top: 0;
  opacity: 2;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid ${colorPrimary};
  overflow: hidden;
`;

const DevLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: ${colorWhite};
  outline none;
  font-family: "Raleway", sans-serif;

  &:active {
    color: ${colorPrimary};
  }

  &:hover {
    cursor: pointer;
  }
`;
