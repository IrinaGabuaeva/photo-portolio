import styled from "styled-components";
import { Navbar, StyledLink } from "../Styles";
import { HashLink } from "react-router-hash-link";
{
  /* <HashLink smooth to="/path#hash">
  Link to Hash Fragment
</HashLink>; */
}

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
      <DevLink smooth to="path/#about">
        About
      </DevLink>
      <DevLink smooth to="">
        Projects
      </DevLink>
      <DevLink smooth to="">
        Skills
      </DevLink>
      <DevLink snooth to="">
        Contact
      </DevLink>
    </DevNavbar>
  );
}

function About() {
  return (
    <AboutBox id="about">
      <Header>About</Header>
      <RowDirection>
        <Picture />
        <Description>
          jbkjhdsajk jbfdsjkbkjwf fkbkjfbkjbbfa j kjfabjbfjkabf a kga kbgka gka
          grg gk g kgkabg jk ka jkabkjabjk ak abkj bk sjksb kjs bkjs bkj sbksj k
          bksknh lrtht b shdkjbgkslbgjkdbjv bdrr bh b rsb b rhdj bjhdb
          hrlsbirbssj vs vs bbgjs jbkjhdsajk jbfdsjkbkjwf fkbkjfbkjbbfa j
          kjfabjbfjkabf a kga kbgka gka grg gk g kgkabg jk ka jkabkjabjk ak abkj
          bk sjksb kjs bkjs bkj sbksj k bksknh lrtht b shdkjbgkslbgjkdbjv bdrr
          bh b rsb b rhdj bjhdb hrlsbirbssj vs vs bbgjs
        </Description>
      </RowDirection>
    </AboutBox>
  );
}

function Projects() {
  return (
    <ProjectsBox>
      <Header>PROJECTS</Header>
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
      <Header>SKILLS</Header>
    </SkillsBox>
  );
}

function Contact() {
  return (
    <ContactBox>
      <Header>CONTACT</Header>
    </ContactBox>
  );
}

///// STYLES ///////

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const DevNavbar = styled(Navbar)`
  background-color: grey;
  position: sticky;
  top: 0;
  opacity: 2;
  padding: 20px 0 20px 0;
`;
const DevLink = styled(HashLink)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: currentColor;
`;
const Header = styled.header`
  font-size: 35px;
  text-decoration: underline;
  margin: 20px 0 60px 0;
`;
const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
///// ABOUT //////

const AboutBox = styled.div`
  display: flex;
  background-color: blue;
  flex-direction: column;
  align-items: center;
  height: 600px;
`;
const Picture = styled.div`
  background-image: url(/images/me.jpeg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
  width: 300px;
  border: 1px solid red;
`;
const Description = styled.div`
  display: flex;

  width: 50%;
  padding: 30px;
  border: 1px solid red;
`;
/// PROJECTS ////

const ProjectsBox = styled.div`
  display: flex;
  background-color: pink;
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
  background-color: green;
  height: 600px;
  align-items: center;
`;

const ContactBox = styled.div`
  display: flex;
  background-color: purple;
  flex-direction: column;
  height: 600px;
  align-items: center;
`;
