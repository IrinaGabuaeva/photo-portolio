import { React, useEffect } from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import styled from "styled-components";
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

  function clearHistory() {
    return window.location.assign("http://www.localhost:3000/art");
  }

  useEffect(() => {
    return history.push("/art/people");
  }, []);

  console.log("PROPS", props);
  return (
    <Main className="main">
      <Arrow src={arrow} onClick={handleClick} />
      <Heading className="heading">
        <Heading2 className="heading2">Irina Gabuaeva</Heading2>
        <Heading3 className="heading3">Photography</Heading3>
      </Heading>
      <LogoBox>
        <Link to="/instagram" onClick={() => setTimeout(clearHistory, 1000)}>
          <Logo src={igLogo} />
        </Link>
        <Logo src={linkedinLogo} />
        <Logo src={mailLogo} />
      </LogoBox>
      <Navigation className="navigation" />
      <Content className="content">
        <Switch>
          <Route path="/art/people" component={People} />
          <Route path="/art/nyc" component={Nyc} />
          <Route path="/art/nature" component={Nature} />
          <Route path="/art/about" component={About} />
        </Switch>
      </Content>
    </Main>
  );
}

export default MainPaige;

/////// STYLES ///////

const Main = styled.div`
  display: flex;

  overflow: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-flow: column wrap;
`;

const Arrow = styled.img`
  width: 30px;
  margin: 10px 10px 0 10px;
  opacity: 0.6;
  align-self: flex-start;
  &:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;

  color: rgb(58, 58, 58);
  align-self: center;

  margin: 0 0 1.5em 0;

  @media (min-width: 1800px) {
    margin: 4.5em 0 4em 0;
  }
`;

const Heading2 = styled.div`
  align-self: center;
  font-weight: bold;
  font-style: italic;
  font-family: "Tangerine", cursive;
  font-size: 1.7rem;
  display: block;
  letter-spacing: 0.7rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
  @media (min-width: 1800px) {
    font-size: 3.5rem;
    letter-spacing: 1.2rem;
  }
`;

const Heading3 = styled.div`
  margin-top: 0.6em;
  // display: block;
  align-self: center;
  font-family: "Raleway", serif;
  text-transform: uppercase;
  letter-spacing: 0.5rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
  }
  @media (min-width: 1800px) {
    font-size: 1.7rem;
    letter-spacing: 1.2rem;
    margin-top: 25px;
  }
`;

const LogoBox = styled.div`
  align-self: center;
  display: flex;
`;

const Logo = styled.img`
  width: 20px;
  margin: 0 1.5rem 1.5rem 1.5rem;
  opacity: 0.9;
`;

const Content = styled.div`
  padding: 10px 10px;
  // @media (max-width: 510px) {
  //   padding: 15px 0 10px 0;
  // }
`;
