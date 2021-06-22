import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  colorBlack,
  colorWhite,
  colorGrey,
  darkGrey,
  darkShadow,
} from "../../Styles";
import { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
  const [video, setVideo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/videos");
      setVideo(data);
    };
    fetchData();
  }, []);
  const videoArray = Object.values(video);
  const key = videoArray[0];
  const url = videoArray[1];

  return (
    <LpBox className="LpBox">
      <BgVideo className="BgVideo">
        <BgVideoContent
          key={key}
          className="BgVideoContent"
          autoPlay
          muted
          loop
        >
          <source src={url} type="video/mp4" />
          <source src="img/video.webm" type="video.webm" />
          Your browser is not supported!
        </BgVideoContent>
      </BgVideo>
      <div></div>
      <BlackBg />
      <TextBox>
        <LpLinkBox direction="left" verticalDirection="top">
          <LinkTextBox>
            <LpLink
              to="/art/people"
              color={key === 4 || key === 5 ? colorWhite : colorGrey}
            >
              Art
            </LpLink>
            <OpenEye></OpenEye>
          </LinkTextBox>
        </LpLinkBox>
        <LpHeader color={key === 4 || key === 5 ? colorWhite : colorBlack}>
          Irina Gabuaeva
        </LpHeader>
        <LpLinkBox direction="right" verticalDirection="bottom">
          <LinkTextBox>
            <LpLink
              to="/dev"
              color={key === 4 || key === 5 ? colorWhite : colorGrey}
            >
              Dev
            </LpLink>
          </LinkTextBox>
        </LpLinkBox>
      </TextBox>
    </LpBox>
  );
}
export default LandingPage;

////// ANIMATION ////////

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  90% {
    opacity: .3;
  }
  95% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`;

//fix this(so the element doesn't flow away from page)
const open = keyframes`
0% {
  top: 0;
  left:0;
}
100% {
  transform: translate(-100px, -500px);

}`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  } 
`;

const slideIn = (direction) => keyframes`
0% {
  margin-${direction}: -100%;
}
`;

const slideInVertical = (verticalDirection) => keyframes`
0% {
  margin-${verticalDirection}: -100%;
}
`;

const zoomIn = keyframes`

  0%{
   transform: scale(.1) rotate(45deg);
  }
    100%{
     transform: scale(1) rotate(45deg);
  }
  `;

const pulse = keyframes`
0% {
 
  font-size: 1rem;
}

	40% {
    
    font-size: 2rem;
	}
60% {
 font-size: 2rem;

}
	100% {
    font-size: 1rem;
  }
`;

const smallPulse = keyframes`
0% {
 
  font-size: .5rem;
}

	40% {
    
    font-size: 1.1rem;
	}
60% {
 
font-weight: 500;
}
	100% {
    font-size: .5rem;
  }
`;

///////// STYLES ///////

const LpBox = styled.div`
  // box-sizing: border-box;
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

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const LpHeader = styled.header`
  font-size: 1.6rem;
  opacity: 0.8;
  letter-spacing: 0.5rem;
  animation-name: ${fadeIn};
  animation-duration: 4s;
  color: ${(props) => props.color};

  @media (max-width: 600px) {
    letter-spacing: 0.5rem;
    padding: 100px 0 100px 0;
  }
  @media (min-width: 1800px) {
    font-size: 3.2rem;
    letter-spacing: 1.1rem;
  }
`;
const LpLinkBox = styled.div`
  height: 90px;
  width: 90px;
  animation-name: ${zoomIn};
  animation-duration: 7s;
  border-bottom: 1px solid ${colorBlack};
  border-radius: 85px 0 85px 0;
  position: relative;
  box-shadow: ${darkShadow};
  transform: rotate(45deg);
  overflow: hidden;
	// background-size: 400% 400%;
	// animation: ${open} 15s ease;
}




  &:hover {
   background:                                          
    radial-gradient(closest-side, transparent, ${colorBlack}, ${darkGrey},transparent,${colorGrey},transparent,transparent, transparent);
    color: ${colorWhite};
  }

  @media (max-width: 600px) {
    animation-name: ${(props) => slideInVertical(props.verticalDirection)};
    animation-duration: 3s;
  }

  @media (min-width: 1800px) {
    height: 170px;
    width: 170px;
    border-radius: 140px 0 140px 0;
  }
`;

const LinkTextBox = styled.div`
  height: 90px;
  width: 90px;
  // animation-name: ${zoomIn};
  animation-duration: 7s;
  display: flex;
  transform: rotate(-45deg);
  align-items: center;
  justify-content: center;

  @media (min-width: 1800px) {
    height: 170px;
    width: 170px;
  }
`;

const OpenEye = styled.div`
  position: absolute;
  height: 90px;
  width: 90px;
  border-radius: 85px 0 85px 0;
  transform: rotate(45deg);
  background: linear-gradient(
    to bottom right,
    ${colorGrey},
    #ffcd94,
    #ffe0bd,
    #eac086,
    #ffe0bd,
    ${colorGrey}
  );
  opacity: 0.3;
  // (255, 205, 148),
  // (255, 224, 189),
  // (234, 192, 134),
  // (255, 224, 189),

  animation-name: ${open};
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
  // transform: translate(-40px, -40px);
  // -webkit-transform: translate(0, -500px);
  // -o-transform: translate(0, -500px);
  // -moz-transform: translate(0, -500px);
`;

//change font!
const LpLink = styled(Link)`
  font-family: "Arial", sans-serif;
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  text-decoration: none;
  animation: ${fadeIn};
  animation-duration: 5s;

  color: ${(props) => props.color};

  &:hover {
    color: ${colorWhite};
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    letter-spacing: 0.3rem;
  }
  @media (min-width: 1800px) {
    font-size: 3.5rem;
    letter-spacing: 1.2rem;
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
`;

const BgVideo = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
