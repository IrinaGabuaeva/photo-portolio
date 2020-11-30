import React from "react";
import { Switch, Route } from "react-router-dom";
import { Content, Main, Heading, Heading2, Heading3 } from "../Styles";
import Navigation from "./Navigation";
import People from "./People";
import Nyc from "./NYC";
import Nature from "./Nature";
import About from "./About";

function MainPaige(props) {
  console.log("PROPS", props);
  return (
    <Main className="main">
      <Heading className="heading">
        <Heading2 className="heading2">Irina Gabuaeva</Heading2>
        <Heading3 className="heading3">Photography</Heading3>
      </Heading>
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
