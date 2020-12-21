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
  display: flex;
  background-color: ${colorBlack};
  position: sticky;
  top: 0;
  opacity: 2;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid ${colorPrimary};
  overflow: hidden;
  align-items: center;

  @media (max-width: 600px) {
    padding: 15px 0 15px 0;
  }
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

  @media (max-width: 900px) {
    margin: 0 1rem 0 1rem;
    
  }

  @media(max-width: 600px) {
        margin: 0 .5rem 0 .5rem;
      }

  @media (min-width: 1800px) {
      margin: 0 6rem 0 6rem;
  }
`;
