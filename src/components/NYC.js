import React from "react";
import { Row, Column, Photo, PhotoVertical } from "../Styles.js";

export default function Nyc() {
  return (
    <Row>
      <Column>
        <Photo />
        <Photo />
        <PhotoVertical />
      </Column>
      <Column>
        <PhotoVertical />
        <Photo />
        <Photo />
      </Column>
      <Column>
        <Photo />
        <Photo />
        <PhotoVertical />
      </Column>
    </Row>
  );
}
