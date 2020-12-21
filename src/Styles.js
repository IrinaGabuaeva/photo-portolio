import styled from "styled-components";
import { Link } from "react-router-dom";
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

/////// COLORS /////////
export const colorPrimary = "#90d8f0";
export const blueBg = "rgba(144, 216, 240, .5)";
export const colorWhite = "#fafeff";
export const colorBlack = "#011017";

export const Navbar = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  opacity: 0.8;
  font-family: "Raleway";
  font-size: 1.2rem;
  font-weight: lighter;
  width: 100%;
  padding-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  @media (min-width: 1800px) {
    font-size: 2.5rem;
  }
`;

//////// GRID ////////

export const PaddingBox = styled.div`
  padding: 10px 10px;
`;
export const Container = styled.div`
  padding: 10px 10px;

  @media (max-width: 510px) {
    padding: 5px 5px;
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

/////// DEV PAGE ///////////

export const Button = styled.button`
  width: 130px;
  outline: none;
  font-weight: 700;
  background-color: ${(props) => props.color};
  color: ${(props) => props.bgColor};
  font-family: "Tangerine", cursive;
  letter-spacing: 0.1rem;
  font-size: 1rem;

  text-shadow: 0.5px 2px 0.5px #696969, 0 0 1em #c0c0c0, 0 0 0.5em ${colorBlack};

  &:active {
    border: 1px solid ${colorBlack};
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 80px;

    font-weight: 100;
    letter-spacing: 0;
    font-size: 0.5rem;
  }
  @media (max-width: 600px) {
    width: 50px;
  margin-right: 5px;

`;

export const ContentBox = styled.div`
  display: flex;
  background-color: ${(props) => props.bgColor};
  flex-direction: column;
  align-items: center;
  border-bottom: 2px ridge ${(props) => props.color};
  padding: 50px 0 50px 0;

  @media (max-width: 900px) {
    padding: 30px 0 50px 0;
  }
`;

export const HeaderBox = styled.div`
  border-bottom: 1px ridge ${(props) => props.color};
  margin: 10px 0 60px 0;

  @media (max-width: 600px) {
    margin: 10px 0 40px 0;
  }
`;
export const Header = styled.header`
  font-size: 35px;
  margin: 0 0 10px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  letter-spacing: 0.5rem;
  color: ${(props) => props.color};
`;
export const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const DevPicture = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  width: 350px;

  // border: 1px solid ${(props) => props.color};
  border-radius: 2px;

  @media (max-width: 900px) {
    width: 450px;
    height: 300px;
    margin-bottom: 60px;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin: 10px;
  }
`;

export const Description = styled.div`
  display: flex;
  color: ${(props) => props.color};
  width: 50%;
  hyphens: auto;
  // padding: 30px;
  font-family: "Raleway", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  // margin: 0 0 0 40px;
  letter-spacing: 0.2rem;
  line-height: 1.4rem;
  text-align: center;

  @media (max-width: 900px) {
    width: 90%;
  }
`;
export const Logo = styled.img`
  width: 110px;
  height: 110px;
  background-color: ${colorWhite};
  border: 1px solid ${colorBlack};

  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
  }
`;
