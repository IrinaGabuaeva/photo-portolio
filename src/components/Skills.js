import styled from "styled-components";
import { useState } from "react";
import {
  ContentBox,
  HeaderBox,
  Header,
  RowDirection,
  Logo,
  blueBg,
  colorBlack,
} from "../Styles";

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

export default function Skills(props) {
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

      <SkillsRowDirection>
        {logos.map((logo) => {
          console.log("MAP LOGO", logo);
          return (
            <LogoBox>
              <Logo src={logo.img} />
              <SkillName color={textColor}>{logo.name}</SkillName>
            </LogoBox>
          );
        })}
      </SkillsRowDirection>
    </ContentBox>
  );
}

////// STYLES /////////

const SkillsRowDirection = styled(RowDirection)`
  align-items: flex-start;
`;
const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  align-items: center;

  @media (max-width: 900px) {
    margin: 10px;
  }
  @media (min-width: 1800px) {
    margin: 80px;
  }
`;

const SkillName = styled.text`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 1rem;
  color: ${(props) => props.color};

  margin-top: 4px;
  font-family: "Raleway", sans-serif;
  width: 90px;

  @media (min-width: 1800px) {
    font-size: 2rem;
    margin-top: 10px;
  }
`;
