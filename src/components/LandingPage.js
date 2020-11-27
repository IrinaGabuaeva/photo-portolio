import Video from "./video/IMG_3764 copy.mp4";

import styled from "styled-components";

import { useHistory } from "react-router-dom";

function LandingPage() {
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

export default LandingPage;
