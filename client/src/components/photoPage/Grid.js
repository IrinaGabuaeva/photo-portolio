import React, { useState, useEffect, useRef } from "react";
import { StyledImageList, Picture } from "../../Styles.js";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Photo from "./Photo";
const rowHeight = 5;

export const ImageList = (props) => {
  console.log("ImageList props", props);
  // const [isOpen, setIsOpen] = useState(false);
  // const [url, setUrl] = useState("");
  const images = props.images.map((image) => {
    return (
      <ImageCard
        classname="ImageCard"
        key={image.id}
        image={image}
        setIsOpen={props.setIsOpen}
        setUrl={props.setUrl}
      />
    );
  });
  // console.log("state url", url);
  console.log("IMAGES", images);
  // {
  //   if (isOpen) {
  //     return <Photo url={url} setIsOpen={setIsOpen} images={images} />;
  //   } else {
  return (
    <StyledImageList
      className="StyledImageList"
      style={{ gridAutoRows: `${rowHeight}px` }}
    >
      {images}
    </StyledImageList>
  );
};
// }
// };

export const ImageCard = (props) => {
  const [spans, setSpan] = useState(0);

  console.log("IMAGECARD PROPS", props);
  console.log("spans", spans);
  const { description, url } = props.image;
  const box = useRef();

  useEffect(() => {
    console.log("BOX>CURRENT", box.current);
    box.current.addEventListener("load", setSpans);
    setSpans();
    window.addEventListener("resize", setSpans);

    return function cleanup() {
      window.removeEventListener("resize", setSpans);
    };
  }, []);

  const setSpans = () => {
    const height = box.current.clientHeight;
    const span = Math.ceil((height + 10) / rowHeight);
    setSpan(span);
  };
  function handleClick() {
    // e.preventDefault();
    console.log("CLICKED!");

    props.setIsOpen(true);
    props.setUrl(url);
  }
  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <Picture
        onClick={() => handleClick()}
        className="picture"
        ref={box}
        src={url}
        alt={description}
      />
    </div>
  );
};
