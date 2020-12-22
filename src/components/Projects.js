import { useState } from "react";
import styled from "styled-components";
import {
  Header,
  HeaderBox,
  Description,
  ContentBox,
  Picture,
  colorPrimary,
  colorBlack,
  PictureWrapper,
} from "../Styles";

export default function Projects(props) {
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
      <SecondaryTitle color={props.mode.buttonColor}>
        Photo Portfolio
      </SecondaryTitle>
      <SingleProject className="singleProject">
        <ProjectPicture>
          <Picture
            className="projectPicture"
            src={urls[0]}
            color={props.mode.buttonColor}
          />
        </ProjectPicture>
        <ProjectContent>
          <ProjectTitle color={props.mode.buttonColor}>
            Photo Portfolio
          </ProjectTitle>
          <ProjectDescription color={props.mode.text}>
            A photo portfolio website built with Create React App and Styled
            Components
          </ProjectDescription>
          <ProjectLink
            href="https://www.irinagabuaeva.com/art/people"
            color={props.mode.buttonColor}
          >
            IrinaGabuaeva.art
          </ProjectLink>
        </ProjectContent>
      </SingleProject>

      <SecondaryTitle color={props.mode.buttonColor}>Lift Log</SecondaryTitle>
      <SingleProject>
        <ProjectPicture>
          <Picture src={urls[1]} color={props.mode.buttonColor} />
        </ProjectPicture>
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

      <SecondaryTitle color={props.mode.buttonColor}>Polish'd</SecondaryTitle>
      <SingleProject>
        <ProjectPicture>
          <Picture src={urls[2]} color={props.mode.buttonColor} />
        </ProjectPicture>
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

//////// STYLES ///////

const SingleProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 60px 0 40px 0;

  &:not(:last-child) {
    border-bottom: 5px solid ${(props) => props.color};
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 30px 0 50px 0;
  }
  @media (min-width: 1800px) {
    padding: 100px 0 100px 0;
  }
`;
const ProjectPicture = styled.div`
  width: 450px;

  @media (max-width: 450px) {
    width: 100%;
  }
  @media (min-width: 1800px) {
    width: 700px;
  }
`;
const ProjectContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 40px 0 40px 0;
  }
`;

const ProjectTitle = styled(Header)`
  font-family: "Tangerine", cursive;
  color: ${(props) => props.color};
  font-size: 25px;
  font-weight: 400;

  border-bottom: 1px solid ${(props) => props.color};

  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 1800px) {
    font-size: 45px;
  }
`;

const SecondaryTitle = styled(ProjectTitle)`
  display: none;
  @media (max-width: 900px) {
    display: inline;
    margin-top: 30px;
  }
`;
const ProjectDescription = styled(Description)`
  width: 80%;
  text-align: center;
  font-size: 1rem;
  margin: 50px 0 50px 0;

  @media (min-width: 1800px) {
    font-size: 1.6rem;
  }
`;
const ProjectLink = styled.a`
  font-size: 25px;
  font-family: "Raleway", sans-serif;
  text-decoration: underline;
  color: ${(props) => props.color};
  font-family: "Tangerine", cursive;

  @media (min-width: 1800px) {
    font-size: 40px;
  }
`;
