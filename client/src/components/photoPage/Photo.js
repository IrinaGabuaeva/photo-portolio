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
  border: 1px solid red;
  top: 0;
  left: 0;
  opacity: 1;

  background-color: ${colorBlack};
`;
const ContentBox = styled.div`
  // margin: 50px;
  width: 100%;
  margin: 0;
  height: 100%;
  display: flex;
  border: 1px solid green;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const SinglePicture = styled.img`
  height: 80%;
  border: 1px solid red;
`;
const Arrow = styled.img`
  width: 35px;
  height 35px;
  opacity: 0.6;
  background-color: white;
  border: 1px solid red;
  &:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }

  @media (min-width: 1800px) {
    width: 60px;
  }
`;

const LeftArrowBox = styled.div`
  width: 100px;
  position: fixed;
  top: 50%;
  left: 5%;
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;

const RightArrowBox = styled.div`
  width: 100px;
  position: fixed;
  top: 50%;
  right: 5%;
  display: flex;
  justify-content: center;
  border: 1px solid red;
`;
