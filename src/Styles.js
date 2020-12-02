import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

////// ANIMATION
const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// export const Body = styled.body`
//   box-sizing: border-box;
//   font-size: 62.5%;
//   font-family: "Tangerine", cursive;
//   font-weight: 100;
//   line-height: 1.7;
//   padding: 10rem;
//   margin: 0;
//   border: 1px solid greenyellow;
// `;

//////// LANDING PAGE
export const LandingPageBox = styled.div`
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Tangerine", cursive;
  font-weight: 100;
  line-height: 1.7;
  padding: 10rem;
  margin: 0;
  top: 7px;
  right: 7px;
  bottom: 7px;
  left: 7px;
  position: absolute;
  // border: 1px solid red;
`;

export const LandingPageHeader = styled.header`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(58, 58, 58);
  font-size: 1rem;
  opacity: 0.8;
  letter-spacing: 0.8rem;
  animation-name: ${FadeIn};
  animation-duration: 3s;
  // border: 1px solid green;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    letter-spacing: 0.5rem;
  }
`;

export const BlackBg = styled.div`
  background-color: hsla(0, 0%, 2%, 1);
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 7s ease-in;
  z-index: 100;
  top: 0;
  left: 0;
  // border: 1px solid blue;
`;

export const BgVideo = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  // border: 1px solid black;
`;

export const BgVideoContent = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
  // overflow: hidden;
  // border: 1px solid pink;
`;

/////// MAIN PAGE

export const Main = styled.div`
  display: flex;

  overflow: auto;
  float: left;
  flex-direction: column;
  justify-content: center;
  // flex-flow: wrap;
  align-items: center;
  // display: block;

  width: 100%;

  // border: 2px solid teal;
  // position: relative;
  flex-flow: column wrap;
`;

export const Heading = styled.div`
  display: flex;
  //border: 2px solid black;
  flex-direction: column;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  color: rgb(58, 58, 58);
  // text-align: center;
  opacity: 1;
  margin: 2.5em 0 2em 0;

  @media (min-width: 1800px) {
    margin: 4.5em 0 4em 0;
  }
`;
export const Heading2 = styled.div`
  align-self: center;
  // background-color: yellow;
  font-weight: bold;
  font-style: italic;
  font-family: "Tangerine", cursive;
  font-size: 1.7rem;
  display: block;
  letter-spacing: 0.7rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
  }
  @media (min-width: 1800px) {
    font-size: 3.5rem;
    letter-spacing: 1.2rem;
  }
`;

export const Heading3 = styled.div`
  margin-top: 0.6em;
  // background-color: plum;
  // font-size: 0.8rem;
  display: block;
  font-family: "Raleway", serif;
  text-transform: uppercase;
  letter-spacing: 0.5rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
  }
  @media (min-width: 1800px) {
    font-size: 1.7rem;
    letter-spacing: 1.2rem;
    margin-top: 25px;
  }
`;

export const Navbar = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  opacity: 0.8;
  font-family: "Raleway";
  font-size: 1.2rem;
  font-weight: lighter;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: currentColor;

  &:hover {
    text-decoration: underline;
    color: #303030;
    transform: translate(0, -3px);
  }
  &:focus {
    text-decoration: underline;
  }
  @media (max-width: 700px) {
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
`;

//////// GRID

export const Content = styled.div`
  padding: 10px 10px;
  @media (max-width: 510px) {
    padding: 15px 0 10px 0;
  }
`;

export const PaddingBox = styled.div`
  padding: 10px 10px;
`;
export const Container = styled.div`
  border: 1px ridge;
  padding: 10px 10px;
  border: 1px solid blue;
  @media (max-width: 510px) {
    border: none;
    padding: 0;
  }
`;

export const StyledImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0px 10px;

  @media (max-width: 510px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
`;

export const Picture = styled.img`
  width: 100%;
`;
