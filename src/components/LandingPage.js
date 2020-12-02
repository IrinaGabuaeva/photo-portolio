import Video from "./video/IMG_3764 copy.mp4";
import { useHistory } from "react-router-dom";
import {
  Body,
  LandingPageBox,
  LandingPageHeader,
  BlackBg,
  BgVideo,
  BgVideoContent,
  PaddingBox,
} from "../Styles";

function LandingPage() {
  const history = useHistory();

  function handleClick() {
    return history.push("/mainPage");
  }

  return (
    // <Body>
    <LandingPageBox className="LandingPageBox" onClick={handleClick}>
      <BgVideo className="BgVideo">
        <BgVideoContent className="BgVideoContent" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          <source src="img/video.webm" type="video.webm" />
          Your browser is not supported!
        </BgVideoContent>
      </BgVideo>
      <div></div>
      <BlackBg />
      <LandingPageHeader>Irina Gabuaeva</LandingPageHeader>
    </LandingPageBox>
    // </Body>
  );
}

export default LandingPage;
