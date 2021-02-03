import React, { useState, useEffect, useRef } from "react";
import { StyledImageList, Picture, Container } from "../Styles.js";
import axios from "axios";

const rowHeight = 5;

export default function Nyc() {
  return <img src={`${process.env.PUBLIC_URL}/images/IMG_0236.JPG`} />;
}
