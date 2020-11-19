import styled from "styled-components";
import { Link } from "react-router-dom";

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

  border: 2px solid teal;
  // position: relative;
  flex-flow: column wrap;
`;

export const Heading = styled.div`
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  // flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  color: rgb(58, 58, 58);
  // text-align: center;
  opacity: 1;
  margin-top: 2.5em;
`;
export const Heading2 = styled.div`
  align-self: center;
  background-color: yellow;
  font-weight: bold;
  font-style: italic;
  font-family: "Tangerine", cursive;
  font-size: 1.7rem;
  display: block;
  letter-spacing: 0.7rem;
`;

export const Heading3 = styled.div`
  margin-top: 0.6em;
  background-color: plum;
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
`;
