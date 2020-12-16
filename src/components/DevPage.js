import { useState } from "react";
import styled from "styled-components";
// import{ init } from 'emailjs-com';
// init("user_TeKdi5b6kVrfOsjleRRCr");

import emailjs from "emailjs-com";
import {
  Navbar,
  colorPrimary,
  blueBg,
  colorWhite,
  colorBlack,
} from "../Styles";
import { Link, animateScroll as scroll } from "react-scroll";

import nodeLogo from "./Logos/logo-nodejs.svg";
import jsLogo from "./Logos/logo-javascript.svg";
import reactLogo from "./Logos/react-js.svg";
import expressLogo from "./Logos/expressjs.svg";
import htmlLogo from "./Logos/logo-html5.svg";
import reduxLogo from "./Logos/redux.svg";
import gitLogo from "./Logos/git-branch-outline.svg";
import githubLogo from "./Logos/logo-github.svg";
import sequelizeLogo from "./Logos/sequelize.svg";
import styledLogo from "./Logos/styled-components.svg";
import cssLogo from "./Logos/logo-css3.svg";
import materialLogo from "./Logos/material-ui.svg";
import scssLogo from "./Logos/sass-1.svg";
import postgresqlLogo from "./Logos/postgresql.svg";

import mailLogo from "./Logos/mail-outline.svg";
import linkedinLogo from "./Logos/logo-linkedin.svg";
import facebookLogo from "./Logos/logo-facebook.svg";

const darkMode = {
  name: "dark mode",
  text: colorWhite,
  bg: colorBlack,
  buttonText: "Feeling blue?",
  buttonColor: colorPrimary,
};
const blueMode = {
  name: "blue mode",
  text: colorBlack,
  bg: blueBg,
  buttonText: "Cheer me up!",
  buttonColor: colorBlack,
};
const pinkMode = {
  name: "pink mode",
  text: colorBlack,
  bg: "#ffccff",
  buttonText: "Black & blue",
  buttonColor: colorBlack,
};
const mixedMode = {
  name: "mixed mode",
  text: colorWhite,
  bg: colorBlack,
  buttonText: "Back to norm",
  buttonColor: colorPrimary,
};
export default function DevPage() {
  const [mode, setMode] = useState(darkMode);

  const toggle = () => {
    let newMode = mode;
    if (mode === darkMode) {
      newMode = blueMode;
    } else if (mode === blueMode) {
      newMode = pinkMode;
    } else if (mode === pinkMode) {
      newMode = mixedMode;
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
  //   console.log("PROPS", props);
  const [url, setUrl] = useState("/images/me2.jpeg");
  console.log("URL", url);
  const [localMode, setLocalMode] = useState({
    bg: blueBg,
    text: colorBlack,
  });
  const bgColor =
    props.mode.name === "mixed mode" ? localMode.bg : props.mode.bg;
  console.log("LOCAL MODE", localMode);

  const textColor =
    props.mode.name === "mixed mode" ? localMode.text : props.mode.text;
  return (
    <ContentBox id="about" bgColor={bgColor} color={textColor}>
      <HeaderBox color={textColor}>
        <Header color={textColor}>About</Header>
      </HeaderBox>
      <RowDirection>
        <Picture color={textColor} url={url} />
        <Description color={textColor}>
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
  console.log("PROJECT PROPS", props);
  const [urls, setUrls] = useState([
    "/images/portfolio.png",
    "/images/liftLog.png",
    "/images/polishd.png",
  ]);
  const [borderColor, setColor] = useState(colorBlack);
  console.log("BORDER COLOR", borderColor);
  const color =
    props.mode.name === "mixed mode" ? borderColor : props.mode.text;
  return (
    <ContentBox id="projects" bgColor={props.mode.bg} color={color}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>PROJECTS</Header>
      </HeaderBox>
      <SingleProject className="singleProject">
        <ProjectPicture
          className="projectPicture"
          url={urls[0]}
          color={props.mode.buttonColor}
        />
        <ProjectContent>
          <ProjectTitle color={props.mode.buttonColor}>
            Photo Portfolio
          </ProjectTitle>
          <ProjectDescription color={props.mode.text}>
            A photo portfolio website built with Create React App and Styled
            Components
          </ProjectDescription>
          <ProjectLink
            href="http://www.localhost:3000/art/people"
            color={props.mode.buttonColor}
          >
            IrinaGabuaeva.art
          </ProjectLink>
        </ProjectContent>
      </SingleProject>

      <SingleProject>
        <ProjectPicture url={urls[1]} color={props.mode.buttonColor} />
        <ProjectContent>
          <ProjectTitle color={props.mode.buttonColor}>Lift Log</ProjectTitle>
          <ProjectDescription color={props.mode.text}>
            A web app that tracks your movement during weight training and logs
            the details of your workout.
          </ProjectDescription>
          <ProjectLink
            href="https://lift-log-pro.herokuapp.com/"
            color={props.mode.buttonColor}
          >
            lift-log-pro.herokuapp.com
          </ProjectLink>
        </ProjectContent>
      </SingleProject>

      <SingleProject>
        <ProjectPicture url={urls[2]} color={props.mode.buttonColor} />
        <ProjectContent>
          <ProjectTitle color={props.mode.buttonColor}>Polish'd</ProjectTitle>
          <ProjectDescription color={props.mode.text}>
            An e-commerce web application featuring a product catalog, user
            cart, checkout process, and admin dashboard.
          </ProjectDescription>
          <ProjectLink
            href="http://polishd.herokuapp.com/"
            color={props.mode.buttonColor}
          >
            polishd.herokuapp.com
          </ProjectLink>
        </ProjectContent>
      </SingleProject>
    </ContentBox>
  );
}

function Skills(props) {
  const [localMode, setLocalMode] = useState({
    bg: blueBg,
    text: colorBlack,
  });

  const [logos, setLogos] = useState([
    { img: nodeLogo, name: "Node.js" },
    { img: jsLogo, name: "Javascript" },
    { img: reactLogo, name: "React" },
    { img: expressLogo, name: "Express" },
    { img: htmlLogo, name: "HTML" },
    { img: reduxLogo, name: "Redux" },
    { img: gitLogo, name: "Git" },
    { img: githubLogo, name: "Github" },
    { img: sequelizeLogo, name: "Sequelize" },
    { img: styledLogo, name: "Styled-components" },
    { img: cssLogo, name: "CSS" },
    { img: materialLogo, name: "Material UI" },
    { img: scssLogo, name: "SCSS" },
    { img: postgresqlLogo, name: "PostgreSQL" },
  ]);

  const bgColor =
    props.mode.name === "mixed mode" ? localMode.bg : props.mode.bg;
  console.log("LOCAL MODE", localMode);

  const textColor =
    props.mode.name === "mixed mode" ? localMode.text : props.mode.text;

  console.log("LOGOS", logos);
  return (
    <ContentBox id="skills" bgColor={bgColor} color={textColor}>
      <HeaderBox color={textColor}>
        <Header color={textColor}>SKILLS</Header>
      </HeaderBox>

      <RowDirection>
        {logos.map((logo) => {
          console.log("MAP LOGO", logo);
          return (
            <LogoBox>
              <Logo src={logo.img} />
              <SkillName color={textColor}>{logo.name}</SkillName>
            </LogoBox>
          );
        })}
      </RowDirection>
    </ContentBox>
  );
}

function Contact(props) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9wql7fm",
        "template_bclag76",
        e.target,
        "user_TeKdi5b6kVrfOsjleRRCr"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <ContentBox id="contact" bgColor={props.mode.bg} color={props.mode.text}>
      <HeaderBox color={props.mode.text}>
        <Header color={props.mode.text}>CONTACT</Header>
      </HeaderBox>
      <FormTitle color={props.mode.buttonColor}>
        Have a question or want to work together?
      </FormTitle>
      <Form onSubmit={sendEmail}>
        <FormContainer color={props.mode.text}>
          <label htmlFor="name" />
          <Input
            type="name"
            name="name"
            placeholder="Name"
            color={props.mode.text}
          />

          <label htmlFor="email" />
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            color={props.mode.text}
          />

          <label htmlFor="message" />
          <Textarea
            name="message"
            placeholder="Your Message"
            color={props.mode.text}
          />
        </FormContainer>
        <SubmitButton type="submit" color={props.mode.buttonColor}>
          Submit
        </SubmitButton>
      </Form>
      <ContactBox>
        <ExternalLink href="https://www.linkedin.com/in/Irina-Gabuaeva">
          <ContactLogo src={linkedinLogo} />
        </ExternalLink>
        <ExternalLink href="">
          <ContactLogo src={mailLogo} />
        </ExternalLink>
        <ExternalLink href="https://www.github.com/IrinaGabuaeva">
          <ContactLogo src={githubLogo} />
        </ExternalLink>
        <ExternalLink href="https://www.facebook.com/irina.gabuaeva">
          <ContactLogo src={facebookLogo} />
        </ExternalLink>
      </ContactBox>
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
  font-family: "Raleway", sans-serif;

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

  margin: 0 -8px 10px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: ${(props) => props.color};
`;
const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 40px 40px;
  flex-wrap: wrap;
`;
///// ABOUT //////

const ContentBox = styled.div`
  display: flex;
  background-color: ${(props) => props.bgColor};
  flex-direction: column;
  align-items: center;
  //   height: 600px;
  border-bottom: 2px ridge ${(props) => props.color};
  padding: 50px 0 50px 0;
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
  font-weight: 400;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 60px 0 40px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.color};
  }
`;
const ProjectPicture = styled(Picture)`
  width: 480px;
  height: 260px;
  margin: 20px;
`;
const ProjectContent = styled.div`
  width: 50%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //   border: 1px solid red;
`;
const ProjectTitle = styled(Header)`
  font-family: "Tangerine", cursive;
  color: ${(props) => props.color};
  font-size: 25px;
  font-weight: 400;
  margin: 0;
  border-bottom: 1px solid ${(props) => props.color};
`;
const ProjectDescription = styled(Description)`
  width: 80%;
`;
const ProjectLink = styled.a`
  font-size: 15px;
  font-family: "Raleway", sans-serif;
  text-decoration: underline;
  color: ${(props) => props.color};

  font-family: "Tangerine", cursive;
`;

////////// SKILLS ///////
const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  flex-wrap: wrap;
  align-items: center;
`;

const Logo = styled.img`
  width: 110px;
  height: 110px;
  background-color: ${colorWhite};
  border: 1px solid ${colorBlack};
`;

const SkillName = styled.text`
  font-size: 1rem;
  color: ${(props) => props.color};
  align-self: center;
  margin-top: 4px;
  font-family: "Raleway", sans-serif;
`;

const FormTitle = styled.text`
  color: ${(props) => props.color};
  font-family: "Tangerine", cursive;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 3px solid ${(props) => props.color};
  background-color: #303030;
`;
const Input = styled.input`
  height: 40px;
  margin: 4px;
  padding: 0 0 0 10px;
  background-color: ${colorWhite};
  outline: none;
  border: none;
  color: ${colorPrimary};
  font-size: 1rem;
  &::placeholder {
    color: ${colorBlack};
    font-family: "Raleway", sans-serif;
    letter-spacing: 0.8px;
  }
`;
const Textarea = styled.textarea`
  height: 100px;
  margin: 4px;
  padding: 10px 0 0 10px;
  background-color: ${colorWhite};
  outline: none;
  border: none;
  font-size: 1rem;
  color: ${colorPrimary};
  &::placeholder {
    color: ${colorBlack};
    font-family: "Raleway", sans-serif;
    letter-spacing: 0.8px;
  }
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
  margin-top: 8px;
`;
const ContactBox = styled.div`
  display: flex;
  margin: 70px 0 -20px 0;
  align-items: center;
`;
const ContactLogo = styled(Logo)`
  width: 50px;
  height: 50px;
  margin: 15px;
`;
const ExternalLink = styled.a`
  display: flex;
  align-self: center;
`;
