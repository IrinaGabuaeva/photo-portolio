import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { colorPrimary, colorBlack } from "../../Styles";
import { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
  const [videoArray, setVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("IN useEFFECT");
      const { data } = await axios.get("/api/videos");
      setVideo(data);
    };
    fetchData();
  }, []);
  console.log("VIDEOArray", videoArray);
  return (
    <LpBox className="LpBox">
      {/* <BgVideo className="BgVideo"> */}
      {/* <BgVideoContent className="BgVideoContent" autoPlay muted loop> */}
      {/* <source src={Video} type="video/mp4" /> */}
      <VideoList videos={videoArray} />
      {/* <source src="img/video.webm" type="video.webm" />
          Your browser is not supported!
        </BgVideoContent> */}
      {/* </BgVideo> */}
      <div></div>
      <BlackBg />
      <TextBox>
        <LpLinkPulse direction="left" verticalDirection="top">
          <LpLink to="/art/people">Art</LpLink>
        </LpLinkPulse>
        <LpHeader>Irina Gabuaeva</LpHeader>
        <LpLinkPulse direction="right" verticalDirection="bottom">
          <LpLink to="/dev">Dev</LpLink>
        </LpLinkPulse>
      </TextBox>
    </LpBox>
  );
}
export default LandingPage;

const VideoList = (props) => {
  console.log("VIDEOLISTPROPS", props);
  const videos = props.videos.map((video) => {
    return <SingleVideo key={video.id} video={video} />;
  });
  return (
    <BgVideo className="BgVideo">
      {/* <BgVideoContent className="BgVideoContent" autoPlay muted loop> */}
      {/* <source src={Video} type="video/mp4" />
      <source src="img/video.webm" type="video.webm" />
      Your browser is not supported! */}
      {videos}
      {/* </BgVideoContent> */}
    </BgVideo>
  );
};

const SingleVideo = (props) => {
  console.log("SINGLE VIDEO PROPS", props);
  const [videoUrl, setVideoUrl] = useState("");
  const url = props.video.url;
  console.log("URL", url);
  console.log("videoUrl", videoUrl);
  // const stringUrl = JSON.stringify(url);

  return (
    <BgVideoContent className="BgVideoContent" autoPlay muted loop>
      <source src={url} type="video/mp4" />
      <source src="img/video.webm" type="video.webm" />
      Your browser is not supported!
    </BgVideoContent>
  );
};

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

const slideInVertical = (verticalDirection) => keyframes`
0% {
  margin-${verticalDirection}: -100%;
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
 
font-weight: 500;
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
  font-size: 1.5rem;
  opacity: 0.8;
  letter-spacing: 0.8rem;
  animation-name: ${FadeIn};
  animation-duration: 4s;
  color: ${colorBlack};

  @media (max-width: 600px) {
    letter-spacing: 0.5rem;
    padding: 100px 0 100px 0;
  }
  @media (min-width: 1800px) {
    font-size: 3.2rem;
    letter-spacing: 1.1rem;
  }
`;
const LpLinkPulse = styled.div`
  animation-name: ${(props) => slideIn(props.direction)};
  animation-duration: 3s;
  @media (max-width: 600px) {
    animation-name: ${(props) => slideInVertical(props.verticalDirection)};
    animation-duration: 3s;
  }
`;
const LpLink = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-decoration: none;

  color: rgb(58, 58, 58);

  animation: ${pulse} 3s infinite;
  animation-delay: 2.8s;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    letter-spacing: 0.3rem;
    animation: ${smallPulse} 3s infinite;
    animation-delay: 2.8s;
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
