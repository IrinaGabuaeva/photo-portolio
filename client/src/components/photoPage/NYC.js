import React, { useState, useEffect } from "react";
import { Container } from "../../Styles.js";
import axios from "axios";
import { ImageList } from "./Grid";
import Photo from "./Photo";

export default function Nyc() {
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      console.log("IN useEFFECT");
      const { data } = await axios.get("/api/nyc");
      console.log("DATA", data);
      setImages(data);
    }
    fetchData();
  }, []);
  console.log("IMAGES ON STATE", images);
  {
    if (isOpen) {
      return <Photo url={url} setIsOpen={setIsOpen} images={images} />;
    } else {
      return (
        <Container className="container">
          <ImageList images={images} setIsOpen={setIsOpen} setUrl={setUrl} />
        </Container>
      );
    }
  }
}
