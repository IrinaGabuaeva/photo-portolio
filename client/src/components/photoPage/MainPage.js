import { React } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";
import People from "./People";
import Nyc from "./NYC";
import Nature from "./Nature";
import About from "./About";
import igLogo from "../Logos/logo-instagram.svg";
import mailLogo from "../Logos/mail-outline.svg";
import linkedinLogo from "../Logos/logo-linkedin.svg";
import arrow from "../Logos/chevron-back-outline.svg";
import upArrow from "../Logos/up-arrow.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { PaddingBox } from "../../Styles";

function MainPaige(props) {
  const history = useHistory();

  function handleClick() {
    return history.push("/");
  }

  return (
    <Main className="main">
      <Arrow src={arrow} onClick={handleClick} />
      <Heading className="heading">
        <Heading2 className="heading2">Irina Gabuaeva</Heading2>
        <Heading3 className="heading3">Photography</Heading3>
      </Heading>
      <LogoBox>
        <ExternalLink href="https://www.instagram.com/irishka_nyx">
          <Logo src={igLogo} />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/Irina-Gabuaeva">
          <Logo src={linkedinLogo} />
        </ExternalLink>
        <ExternalLink href="/dev/#contact">
          <Logo src={mailLogo} />
        </ExternalLink>
      </LogoBox>
      <Navigation className="navigation" />
      <Content className="content">
        <PaddingBox>
          <Switch>
            <Route path="/art/nyc" component={Nyc} />
            <Route path="/art/nature" component={Nature} />
            <Route path="/art/about" component={About} />
            <Route path="/art*" component={People} />
          </Switch>
        </PaddingBox>
      </Content>
      <Link
        to="heading"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <UpArrow src={upArrow} />
      </Link>
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
  width: 35px;
  margin: 10px 10px 0 10px;
  opacity: 0.6;
  align-self: flex-start;

  &:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }

  @media (min-width: 1800px) {
    width: 60px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(58, 58, 58);
  align-self: center;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 1800px) {
    margin: 2rem 0 3rem 0;
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
  margin-top: 0.6rem;
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
const ExternalLink = styled.a`
  display: flex;
  align-self: center;
`;
const Logo = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 1.5rem 1.5rem 1.5rem;
  opacity: 0.9;

  @media (max-width: 600px) {
    margin: 0 1rem 1rem 1rem;
  }
  @media (min-width: 1800px) {
    width: 35px;
    height: 35px;
    margin: 0 3rem 3rem 3rem;
  }
`;

export const UpArrow = styled.img`
  width: 40px;
  border-radius: 2px;

  &:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }
  @media (min-width: 1800px) {
    width: 65px;
  }
`;
const Content = styled.div`
  width: 100%;
`;
