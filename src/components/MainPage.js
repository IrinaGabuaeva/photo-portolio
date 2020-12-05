import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  Content,
  Main,
  HeadersBox,
  Arrow,
  Heading,
  Heading2,
  Heading3,
  LogoBox,
  Logo,
} from "../Styles";
import Navigation from "./Navigation";
import People from "./People";
import Nyc from "./NYC";
import Nature from "./Nature";
import About from "./About";
import igLogo from "./Logos/logo-instagram.svg";
import mailLogo from "./Logos/mail-outline.svg";
import linkedinLogo from "./Logos/logo-linkedin.svg";
import arrow from "./Logos/chevron-back-outline.svg";

function MainPaige(props) {
  const history = useHistory();

  function handleClick() {
    return history.push("/");
  }
  console.log("PROPS", props);
  return (
    <Main className="main">
      <Arrow src={arrow} onClick={handleClick} />
      <Heading className="heading">
        <Heading2 className="heading2">Irina Gabuaeva</Heading2>
        <Heading3 className="heading3">Photography</Heading3>
      </Heading>
      <LogoBox>
        <Logo src={igLogo} />
        <Logo src={linkedinLogo} />
        <Logo src={mailLogo} />
      </LogoBox>
      <Navigation className="navigation" />
      <Content className="content">
        <Switch>
          <Route path="/people" component={People} />
          <Route path="/nyc" component={Nyc} />
          <Route path="/nature" component={Nature} />
          <Route path="/about" component={About} />
        </Switch>
      </Content>
    </Main>
  );
}

export default MainPaige;
