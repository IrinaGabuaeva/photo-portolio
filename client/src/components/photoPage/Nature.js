import React, { useState, useEffect } from "react";
import { Container } from "../../Styles.js";
import axios from "axios";
import { ImageList } from "./Grid";

export default function Nature() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log("IN useEFFECT");
      const { data } = await axios.get("/api/nature");
      console.log("DATA", data);
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
