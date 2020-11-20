// import "../App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Main, Heading, Heading2, Heading3, Svg } from "../Styles";
import Navbar from "./Navigation";
import People from "./People";
import Nyc from "./NYC";
import Nature from "./Nature";
import About from "./About";

function MainPaige(props) {
  console.log("PROPS", props);
  return (
    <Main>
      <Heading>
        <Heading2>Irina Gabuaeva</Heading2>
        <Heading3>Photography</Heading3>
      </Heading>
      <Navbar />

      <Switch>
        <Route path="/people" component={People} />
        <Route path="/nyc" component={Nyc} />
        <Route path="/nature" component={Nature} />
        <Route path="/about" component={About} />
      </Switch>
    </Main>
    // {/* <Route path to="/navigation" component={Navigation} /> */}

    /* <StyledLink to="/people">People</StyledLink>
          <StyledLink>NYC</StyledLink>
          <StyledLink>Nature</StyledLink>
          <StyledLink>About</StyledLink> */

    /* //   <Switch>
        //     <Route exact path="/people">
        //       <People />
        //     </Route>

        //     <Route exact path="/nyc">
        //       <Nyc />
        //     </Route>
        //   </Switch>
        // </Navigation> */
  );
}

// const People = styled.div`
//   width: 100 px;
//   background-color: green;
// `;

// const Nyc = styled.div`
//   width: 100 px;
//   background-color: yellow;
// `;

// const Link = ({ className, children }) => (
//   <a className={className}>{children}</a>
// );

// .pictures {
//   display: flex;
//   flex-wrap: wrap;
//   padding: 0 4px;
//   /* justify-content: space-between; */
// }

// .column {
//   /* flex: 33.33%;
//   max-width: 33.33%; */
//   flex: calc(100% / 3);
//   max-width: calc(100% / 3);
//   padding: 0 4px;
// }

// .photo {
//   margin-top: 8px;
//   vertical-align: middle;
//   width: 100%;
//   transition: transform 0.2s;
// }
// img:hover {
//   transform: scale(1.02);
//   z-index: 100;
// }
export default MainPaige;
