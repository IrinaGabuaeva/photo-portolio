import styled from "styled-components";
import { useState, useEffect } from "react";
import leftArrow from "../Logos/back.svg";
import rightArrow from "../Logos/forward.svg";
import { colorBlack } from "../../Styles";

export default function Photo(props) {
  // const [stateIndex, setIndex] = useState();
  const stateIndex = props.stateIndex;
  const setIndex = props.setIndex;
  console.log("stateINDEX", stateIndex);
  const url = props.url;
  const urlArray = props.images.map((image) => {
    return image.url;
  });
  const index = urlArray.indexOf(url);
  const imageUrl = urlArray[stateIndex];

  useEffect(() => {
    setIndex(index);
  }, []);

  console.log("urlArray", urlArray);

  console.log("Photo PROPS", props);

  function close() {
    props.setIsOpen(false);
  }

  function goLeft() {
    if (stateIndex - 1 === -1) {
      setIndex(urlArray.length - 1);
    } else {
      setIndex(stateIndex - 1);
    }
  }
  function goRight() {
    if (stateIndex + 1 === urlArray.length) {
      setIndex(0);
    } else {
      setIndex(stateIndex + 1);
    }
  }
  console.log(props.images);
  return (
    <PhotoBox>
      <ContentBox>
        <LeftArrowBox>
          <Arrow src={leftArrow} onClick={goLeft} />
        </LeftArrowBox>
        <SinglePicture src={imageUrl} onClick={() => close()} />
        <RightArrowBox>
          <Arrow src={rightArrow} onClick={goRight} />
        </RightArrowBox>
      </ContentBox>
    </PhotoBox>
  );
}

const PhotoBox = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  background-color: ${colorBlack};
`;
const ContentBox = styled.div`
  width: 100%;
  margin: 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const SinglePicture = styled.img`
  max-height: 70%;

  @media (max-width: 900px) {
    height: 60%;
  }
  @media (max-width: 600px) {
    height: 50%;
  }
  @media (min-width: 1800px) {
  }
`;
const Arrow = styled.img`
  width: 35px;
  height 35px;
  opacity: 0.6;
  background-color: white;

  &:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 1800px) {
    // width: 60px;
    // height: 60px;
  }
`;
const ArrowBox = styled.div`
  width: 100px;
  position: fixed;
  top: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 50px;
  }
  @media (max-width: 600px) {
    width: 40px;
  }
  @media (min-width: 1800px) {
    // width: 400px;
  }
`;
const LeftArrowBox = styled(ArrowBox)`
  left: 5%;
`;

const RightArrowBox = styled(ArrowBox)`
  right: 5%;
`;
