import { useState } from "react";
import styled from "styled-components";
import {
  Header,
  HeaderBox,
  Description,
  ContentBox,
  DevPicture,
  colorPrimary,
  colorBlack,
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

//////// STYLES ///////

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
const ProjectPicture = styled(DevPicture)`
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
