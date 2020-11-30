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
  padding: 1px;
  width: 100%;

  // border: 2px solid teal;
  // position: relative;
  flex-flow: column wrap;
`;

export const Navbar = styled.div`
  // display: block;
  // position: absolute;

  align-self: stretch;
  display: flex;
  justify-content: space-around;
  opacity: 0.8;
  font-family: "Raleway";
  font-size: 1.2rem;
  font-weight: lighter;
  margin-bottom: 1em;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
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
  margin-top: 2.5em;
  margin-bottom: 2em;
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
  @media (max-width: 600px) {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
  }
`;

export const Content = styled.div`
  padding: 0 10px;
`;
export const Row = styled.div`
  // border: 2px solid orange;
  border: 1px ridge;
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  justify-content: space-between;
  padding-top: 6px;
`;

export const Column = styled.div/* flex: 33.33%;
  max-width: 33.33%; */ `
  // border: 2px solid blue;
  flex: 1;
  max-width: calc(100% / 3);
  padding: 0 4px;
`;

export const Photo = styled.img.attrs({
  src:
    "https://lh3.googleusercontent.com/1UxU2saHg1lRFxowJDgJF8sp-3eAiWSIMpqlksdLawoKKmeGeiAJEq4GoV4qL4S-8gNXRQL-Y7ujtFI6THC-RDRJQ9DpWfJktQHnZq3P_lGwbr1HUAEBjKKynZOQKCMF8NBfxxBh0Ew=w2400?source=screenshot.guru",
})`
  margin-bottom: 8px;
  vertical-align: middle;
  width: 100%;
  transition: transform 0.2s;
`;

export const PhotoVertical = styled.img.attrs({
  src:
    "https://lh3.googleusercontent.com/xEo-GiGH8VSjaPl9sddZR6y7E4hAkeizc8C2EVVrDrFL_R4y_lLlytu_2Amx3Mlfa-NK-kYLBn_L3aIrZ-Iv-vQwKuZjnpdVMXRVG-9kaqeFKw4OXSNCKN8PjvYgZcSe175RaIdivW8=w2400?source=screenshot.guru",
})`
  margin-bottom: 8px;
  vertical-align: middle;
  width: 100%;
  transition: transform 0.2s;
`;

export const StyledImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0px 10px;
  grid-auto-rows: 1px;
`;

export const Picture = styled.img`
  width: 100%;
`;
export const Container = styled.div`
  width: 98%;
  border: 1px ridge;
  padding: 10px 10px;

  @media (max-width: 600px) {
    width: 100%;
    border: none;
    padding: 0 10;
  }
`;
