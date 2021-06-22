import React, { useState, useEffect, useRef } from "react";
import { StyledImageList, Picture, Container } from "../Styles.js";
import axios from "axios";

const rowHeight = 5;

export default function About() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/about");
      setImages(data);
    }
    fetchData();
  }, []);
  return (
    <Container className="container">
      <ImageList images={images} />
    </Container>
  );
}
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard classname="ImageCard" key={image.id} image={image} />;
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

function ImageCard(props) {
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

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <Picture className="picture" ref={box} src={url} alt={description} />
    </div>
  );
}
