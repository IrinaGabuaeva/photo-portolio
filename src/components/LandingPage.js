import Video from "./video/IMG_3764 copy.mp4";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function LandingPage() {
  return (
    // <Body>
    <LpBox className="LpBox">
      <BgVideo className="BgVideo">
        <BgVideoContent className="BgVideoContent" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          <source src="img/video.webm" type="video.webm" />
          Your browser is not supported!
        </BgVideoContent>
      </BgVideo>
      <div></div>
      <BlackBg />
      <TextBox>
        <LpLink to="/art/people" direction="left">
          Art
        </LpLink>
        <LpHeader>Irina Gabuaeva</LpHeader>
        <LpLink to="/dev" direction="right">
          Dev
        </LpLink>
      </TextBox>
    </LpBox>
    // </Body>
  );
}
export default LandingPage;

////// ANIMATION ////////

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const slideIn = (direction) => keyframes`
0% {
  margin-${direction}: -100%;
}
`;

///////// STYLES ///////

const LpBox = styled.div`
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Tangerine", cursive;
  font-weight: 100;
  line-height: 1.7;
  margin: 0;
  top: 7px;
  right: 7px;
  bottom: 7px;
  left: 7px;
  position: absolute;
`;
const TextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LpHeader = styled.header`
  font-size: 1.2rem;
  opacity: 0.8;
  letter-spacing: 0.8rem;
  animation-name: ${FadeIn};
  animation-duration: 4s;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    letter-spacing: 0.5rem;
  }
`;

const LpLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-decoration: none;
  color: currentColor;
  animation-name: ${(props) => slideIn(props.direction)};
  animation-duration: 3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const BlackBg = styled.div`
  background-color: hsla(0, 0%, 2%, 1);
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 7s ease-in;

  top: 0;
  left: 0;
  // border: 3px solid red;
`;

const BgVideo = styled.div`
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  //   border: 1px solid green;
`;

const BgVideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  overflow: hidden;
  // border: 1px solid pink;
`;
