import "../App.css";
import Video from "./video/IMG_3764 copy.mp4";
import { Router, Switch, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div class="bg-video">
        <video class="bg-video__content" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          <source src="img/video.webm" type="video.webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="black_bg"></div>
      <header className="LandingPage-header">Irina Gabuaeva</header>
    </div>
  );
}

export default LandingPage;
