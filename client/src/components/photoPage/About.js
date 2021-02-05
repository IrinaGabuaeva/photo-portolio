import React, { useState, useEffect } from "react";
import { Container } from "../../Styles.js";
import axios from "axios";
import { ImageList } from "./Grid";

export default function About() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("IN useEFFECT");
      const { data } = await axios.get("/api/about");
      console.log("DATA", data);
      setImages(data);
    }
    fetchData();
  }, []);
  console.log("IMAGES ON STATE", images);
  return (
    <Container className="container">
      <ImageList images={images} />
    </Container>
  );
}
