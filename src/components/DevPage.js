import { useState } from "react";
import styled from "styled-components";
import { Navbar, colorPrimary, blueBg } from "../Styles";
import { Link, animateScroll as scroll } from "react-scroll";

const blueMode = {
  text: "black",
  bg: blueBg,
};
const darkMode = {
  text: "white",
  bg: "black",
};

export default function DevPage() {
  const [mode, setMode] = useState(darkMode);

  const newMode = mode === darkMode ? blueMode : darkMode;

  const toggle = (mode) => {
    setMode(newMode);
  };
  console.log("MODE", mode);
  return (
    <Body>
      <DevNavigation toggle={toggle} />
      <About mode={mode} />
      <Projects mode={mode} />
      <Skills mode={mode} />
      <Contact mode={mode} />
    </Body>
  );
}

function DevNavigation(props) {
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
      <BlueButton onClick={() => props.toggle()}>Feeling blue?</BlueButton>
    </DevNavbar>
  );
}

function About(props) {
  console.log("PROPS", props);
  return (
    <ContentBox id="about" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>About</Header>
      </HeaderBox>
      <RowDirection>
        <Picture color={props.mode.text} />
        <Description color={props.mode.text}>
          After working in the restaurant industry for 16 years I found myself
          intrigued and fascinated by the software engineering field. It allows
          me to grow professionally and as a person, constantly pushing me out
          of my comfort zone. I am a dedicated worker and my background in the
          service industry had taught me to stay calm under pressure, resolve
          conflicts and be great at communicating. I am looking forward to
          joining a company that is innovative, open-minded and socially
          responsible.
        </Description>
      </RowDirection>
    </ContentBox>
  );
}

function Projects(props) {
  return (
    <ContentBox id="projects" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>PROJECTS</Header>
      </HeaderBox>
      <RowDirection>
        <SingleProject>
          <Picture />
          <Description color={props.mode.text}>
            PROJECT1 DESCRIPTION
          </Description>
        </SingleProject>

        <SingleProject>
          <Picture />
          <Description color={props.mode.text}>
            PROJECT2 DESCRIPTION
          </Description>
        </SingleProject>

        <SingleProject>
          <Picture />
          <Description color={props.mode.text}>
            PROJECT3 DESCRIPTION
          </Description>
        </SingleProject>
      </RowDirection>
    </ContentBox>
  );
}

function Skills(props) {
  return (
    <ContentBox id="skills" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>SKILLS</Header>
      </HeaderBox>
    </ContentBox>
  );
}

function Contact(props) {
  return (
    <ContentBox id="contact" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>CONTACT</Header>
      </HeaderBox>
    </ContentBox>
  );
}

///// STYLES ///////

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const DevNavbar = styled(Navbar)`
  background-color: black;
  position: sticky;
  top: 0;
  opacity: 2;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid ${colorPrimary};
`;

const BlueButton = styled.button`
outline: none;

  background-color: ${colorPrimary};
  color: black;
  border 1px ridge white;
  font-family: "Tangerine", cursive;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;
  text-shadow: 3px 5px 2px #474747, 2px 2px 8px rgba(144,216,240,0);

  &:active {
      border: 1px solid black;
  }
  &:hover {
cursor: pointer;
  }
`;
const DevLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: white;
  outline none;

  &:active {
    color: ${colorPrimary};
  }

  &:hover {
    cursor: pointer;
  }
`;
const HeaderBox = styled.div`
  border-bottom: 1px ridge ${(props) => props.color};
  margin: 0 0 30px 0;
`;
const Header = styled.header`
  font-size: 35px;

  margin: 40px -8px 10px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  letter-spacing: 0.5rem;
  color: ${(props) => props.color};
`;
const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
///// ABOUT //////

const ContentBox = styled.div`
  display: flex;
  background-color: ${(props) => props.bgColor};
  flex-direction: column;
  align-items: center;
  height: 600px;
  border-bottom: 1px ridge ${(props) => props.color};
`;
const Picture = styled.div`
  background-image: url(/images/me2.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  width: 300px;
  margin-right: 30px;
  border: 1px ridge ${(props) => props.color};
  border-radius: 2px;
`;
const Description = styled.div`
  display: flex;
  color: ${(props) => props.color};
  width: 50%;
  padding: 30px;
  font-family: "Raleway", sans-serif;
  font-size: 0.8rem;
  font-weight: 100;
  margin: 0 0 0 40px;
  letter-spacing: 0.2rem;
  line-height: 1.3rem;
`;
/// PROJECTS ////

const ProjectsBox = styled.div`
  display: flex;
  background-color: black;
  border-bottom: 1px ridge ${colorPrimary};
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 600px;
`;
const SingleProject = styled.div`
  border: 1px solid black;
  flex-direction: row;
`;

const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  border-bottom: 1px ridge ${colorPrimary};
  height: 600px;
  align-items: center;
`;

const ContactBox = styled.div`
  display: flex;
  background-color: black;
  border-bottom: 1px ridge ${colorPrimary};
  flex-direction: column;
  height: 600px;
  align-items: center;
`;
