import styled from "styled-components";
import { Navbar, colorPrimary } from "../Styles";
import { Link, animateScroll as scroll } from "react-scroll";

export default function DevPage() {
  return (
    <Body>
      <DevNavigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Body>
  );
}

function DevNavigation() {
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
    </DevNavbar>
  );
}

function About() {
  return (
    <AboutBox>
      <HeaderBox>
        <Header id="about">About</Header>
      </HeaderBox>
      <RowDirection>
        <Picture />
        <Description>
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
    </AboutBox>
  );
}

function Projects() {
  return (
    <ProjectsBox className="projects">
      <HeaderBox>
        <Header id="projects">PROJECTS</Header>
      </HeaderBox>
      <RowDirection>
        <SingleProject>
          <Picture />
          <Description>PROJECT1 DESCRIPTION</Description>
        </SingleProject>

        <SingleProject>
          <Picture />
          <Description>PROJECT2 DESCRIPTION</Description>
        </SingleProject>

        <SingleProject>
          <Picture />
          <Description>PROJECT3 DESCRIPTION</Description>
        </SingleProject>
      </RowDirection>
    </ProjectsBox>
  );
}

function Skills() {
  return (
    <SkillsBox>
      <HeaderBox>
        <Header id="skills">SKILLS</Header>
      </HeaderBox>
    </SkillsBox>
  );
}

function Contact() {
  return (
    <ContactBox>
      <HeaderBox>
        <Header id="contact">CONTACT</Header>
      </HeaderBox>
    </ContactBox>
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
const DevLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: white;

  &:active {
    color: ${colorPrimary};
  }

  &:hover {
    cursor: pointer;
  }
`;
const HeaderBox = styled.div`
  border-bottom: 1px ridge ${colorPrimary};
  margin: 0 0 30px 0;
`;
const Header = styled.header`
  font-size: 35px;

  margin: 40px -8px 10px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 100;
  letter-spacing: 0.5rem;
  color: ${colorPrimary};
`;
const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
///// ABOUT //////

const AboutBox = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
  height: 600px;
  border-bottom: 1px ridge ${colorPrimary};
`;
const Picture = styled.div`
  background-image: url(/images/me2.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  width: 300px;
  margin-right: 30px;
  border: 1px ridge ${colorPrimary};
  border-radius: 2px;
`;
const Description = styled.div`
  display: flex;
  color: white;
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
