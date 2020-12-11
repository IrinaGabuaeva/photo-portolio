import { useState } from "react";
import styled from "styled-components";
import {
  Navbar,
  colorPrimary,
  blueBg,
  colorWhite,
  colorBlack,
} from "../Styles";
import { Link, animateScroll as scroll } from "react-scroll";

const darkMode = {
  text: colorWhite,
  bg: colorBlack,
  buttonText: "Feeling blue?",
  buttonColor: colorPrimary,
};
const blueMode = {
  text: colorBlack,
  bg: blueBg,
  buttonText: "Cheer me up!",
  buttonColor: colorWhite,
};
const pinkMode = {
  text: colorBlack,
  bg: "#ffccff",
  buttonText: "Back to norm",
  buttonColor: colorBlack,
};

export default function DevPage() {
  const [mode, setMode] = useState(darkMode);

  const toggle = () => {
    let newMode = mode;
    if (mode === darkMode) {
      newMode = blueMode;
    } else if (mode === blueMode) {
      newMode = pinkMode;
    } else {
      newMode = darkMode;
    }
    setMode(newMode);
  };

  console.log("MODE", mode);
  return (
    <Body>
      <DevNavigation toggle={toggle} mode={mode} />
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
      <Button onClick={() => props.toggle()} color={props.mode.buttonColor}>
        {props.mode.buttonText}
      </Button>
    </DevNavbar>
  );
}

function About(props) {
  console.log("PROPS", props);
  const [url, setUrl] = useState("/images/me2.jpeg");
  console.log("URL", url);
  return (
    <ContentBox id="about" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>About</Header>
      </HeaderBox>
      <RowDirection>
        <Picture color={props.mode.text} url={url} />
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
  const [urls, setUrls] = useState([
    "/images/portfolio.png",
    "/images/liftLog.png",
    "/images/polishd.png",
  ]);
  return (
    <ContentBox id="projects" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>PROJECTS</Header>
      </HeaderBox>
      <SingleProject className="singleProject">
        <ProjectPicture className="projectPicture" url={urls[0]} />
        <ProjectDescription color={props.mode.text}>
          PROJECT1 DESCRIPTION
        </ProjectDescription>
      </SingleProject>

      <SingleProject>
        <ProjectPicture url={urls[1]} />
        <ProjectDescription color={props.mode.text}>
          PROJECT2 DESCRIPTION
        </ProjectDescription>
      </SingleProject>

      <SingleProject>
        <ProjectPicture url={urls[2]} />
        <ProjectDescription color={props.mode.text}>
          PROJECT3 DESCRIPTION
        </ProjectDescription>
      </SingleProject>
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
  background-color: ${colorBlack};
  position: sticky;
  top: 0;
  opacity: 2;
  padding: 20px 0 20px 0;
  border-bottom: 1px solid ${colorPrimary};
`;

const Button = styled.button`
  width: 120px;
  outline: none;
  font-weight: 700;
  background-color: ${(props) => props.color};
  color: ${colorWhite};
  //   border 1px ridge ${colorWhite};
  font-family: "Tangerine", cursive;
  letter-spacing: 0.1rem;
  font-size: 0.9rem;
  //   text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
  //     #90d8f0 0px 0px 20px, #90d8f0 0px 0px 30px, #90d8f0 0px 0px 40px,
  //     #90d8f0 0px 0px 50px, #90d8f0 0px 0px 75px,
  //     2px 2px 2px rgba(144, 216, 240, 0);

  text-shadow: 1px 1px 2px ${colorWhite}, 0 0 1em ${colorBlack},
    0 0 0.2em ${colorBlack};

  &:active {
    border: 1px solid ${colorBlack};
  }
  &:hover {
    cursor: pointer;
  }
`;
const DevLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: ${colorWhite};
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
  padding: 40px 40px 200px 40px; ;
`;
///// ABOUT //////

const ContentBox = styled.div`
  display: flex;
  background-color: ${(props) => props.bgColor};
  flex-direction: column;
  align-items: center;
  //   height: 600px;
  border-bottom: 1px ridge ${(props) => props.color};
`;
const Picture = styled.div`
  background-image: url(${(props) => props.url});
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
  background-color: ${colorBlack};
  border-bottom: 1px ridge ${colorPrimary};
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 600px;
`;
const SingleProject = styled.div`
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;
const ProjectPicture = styled(Picture)`
  width: 480px;
  height: 260px;
  margin: 20px;
`;
const ProjectDescription = styled(Description)`
  width: 10%;
`;
const SkillsBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colorBlack};
  border-bottom: 1px ridge ${colorPrimary};
  height: 600px;
  align-items: center;
`;

const ContactBox = styled.div`
  display: flex;
  background-color: ${colorBlack};
  border-bottom: 1px ridge ${colorPrimary};
  flex-direction: column;
  height: 600px;
  align-items: center;
`;
