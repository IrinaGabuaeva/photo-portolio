import React, { useState, useEffect } from "react";
import { Container } from "../../Styles.js";
import axios from "axios";
import { ImageList } from "./Grid";
import Photo from "./Photo";

export default function Nature() {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [stateIndex, setIndex] = useState();
  const [url, setUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/nature");
      setImages(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Container className="container">
        <ImageList images={images} setIsOpen={setIsOpen} setUrl={setUrl} />
      </Container>
      {isOpen && (
        <Photo
          url={url}
          setIsOpen={setIsOpen}
          stateIndex={stateIndex}
          setIndex={setIndex}
          images={images}
        />
      )}
    </div>
  );
}
