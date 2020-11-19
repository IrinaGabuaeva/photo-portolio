import "../App.css";
import Video from "./video/IMG_3764 copy.mp4";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import styled from "styled-components";

import { useHistory } from "react-router-dom";

function LandingPage() {
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log("The link was clicked.");
  // }

  // console.log("In landing Page");

  const history = useHistory();

  function handleClick() {
    return history.push("/mainPage");
  }

  return (
    <div className="LandingPage" onClick={handleClick}>
      <div>TEXT</div>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          <source src="img/video.webm" type="video.webm" />
          Your browser is not supported!
        </video>
      </div>
      <div></div>
      <div className="black_bg"></div>
      <header className="LandingPage-header">Irina Gabuaeva</header>
    </div>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
export default LandingPage;
