import { Switch, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import People from "./People";
import Nyc from "./NYC";
import Nature from "./Nature";
import About from "./About";

function Navigation(props) {
  console.log("NAV PROPS", props);
  const Navigation = styled.div`
    // display: block;
    // position: absolute;
    align-self: stretch;
    display: flex;
    margin-top: 1em;
    justify-content: space-around;
    background-color: hotpink;
    opacity: 0.8;
    font-family: "Raleway";
    font-size: 1.2rem;
    font-weight: lighter;
  `;
  return (
    <Navigation>
      <Link to="/people">People</Link>
      <Link to="/nyc">NYC</Link>
      <Link to="/nature">Nature</Link>
      <Link to="/about">About</Link>
      {/* <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/mainPage" component={MainPage} /> */}
      {/* <Route path="/people" component={People} />
      <Route path="/nyc" component={Nyc} />
      <Route path="/nature" component={Nature} />
      <Route path="/about" component={About} /> */}
      {/* </Switch>  */}
    </Navigation>
  );
}

// return (
//   <div class="navigation">
//     <a href="#" class="menu-item">
//       People
//     </a>
//     <a href="#" class="menu-item">
//       NYC
//     </a>
//     <a href="#" class="menu-item">
//       Nature
//     </a>
//     <a href="#" class="menu-item">
//       About
//     </a>
//   </div>
// );

export default Navigation;
