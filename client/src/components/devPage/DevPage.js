import { useState } from "react";
import styled from "styled-components";
import DevNavigation from "./DevNavigation";
import DevAbout from "./DevAbout";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

import { colorPrimary, blueBg, colorWhite, colorBlack } from "../../Styles";

const darkMode = {
  name: "dark mode",
  text: colorWhite,
  bg: colorBlack,
  buttonText: "Feeling blue?",
  buttonColor: colorPrimary,
  title: colorPrimary,
};
const blueMode = {
  name: "blue mode",
  text: colorBlack,
  bg: blueBg,
  buttonText: "Cheer me up!",
  buttonColor: colorPrimary,
  title: colorBlack,
};
const pinkMode = {
  name: "pink mode",
  text: colorBlack,
  bg: "#ffccff",
  buttonText: "Black & blue",
  buttonColor: "#ffccff",
  title: colorBlack,
};
const mixedMode = {
  name: "mixed mode",
  text: colorWhite,
  bg: colorBlack,
  buttonText: "Back to norm",
  buttonColor: colorPrimary,
  title: colorPrimary,
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

  return (
    <Body>
      <DevNavigation toggle={toggle} mode={mode} />

      <DevAbout mode={mode} />
      <Projects mode={mode} />
      <Skills mode={mode} />
      <Contact mode={mode} />
    </Body>
  );
}

///// STYLES ///////

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
