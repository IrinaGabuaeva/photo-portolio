import React, { useState, useEffect, useRef } from "react";
import { StyledImageList, Picture } from "../../Styles.js";
const rowHeight = 5;

export const ImageList = (props) => {
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

  return (
    <StyledImageList
      className="StyledImageList"
      style={{ gridAutoRows: `${rowHeight}px` }}
    >
      {images}
    </StyledImageList>
  );
};

export const ImageCard = (props) => {
  const [spans, setSpan] = useState(0);
  const { description, url } = props.image;
  const box = useRef();

  useEffect(() => {
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
