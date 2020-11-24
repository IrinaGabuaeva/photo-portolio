import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;
// const shake = keyframes`
//   10%, 90% {
//     transform: translate3d(-1px, 0, 0);
//   }

//   20%, 80% {
//     transform: translate3d(2px, 0, 0);
//   }

//   30%, 50%, 70% {
//     transform: translate3d(-4px, 0, 0);
//   }

//   40%, 60% {
//     transform: translate3d(4px, 0, 0);
//   }
// `;
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
`;

export const Heading3 = styled.div`
  margin-top: 0.6em;
  // background-color: plum;
  font-size: 0.8rem;
  display: block;
  font-family: "Raleway", serif;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`;

export const StyledLink = styled(Link)`
  margin-left: 4rem;
  margin-right: 4rem;
  text-decoration: none;
  color: currentColor;

  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
`;

export const Row = styled.div`
  // border: 2px solid orange;
  border: 1px ridge;
  display: flex;
  flex-direction: row;
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
// export const Svg = styled.svg.attrs({
//   xlink: "../components/img/SVG/envelope.svg",
// });
// export const Photo = styled.div`
//   border: 2px solid red;
//   margin-top: 8px;
//   vertical-align: middle;
//   width: 100%;
//   transition: transform 0.2s;
//   width: 100px;
//   height: 100px;
// `;
