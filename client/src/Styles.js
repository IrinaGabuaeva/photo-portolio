import styled from "styled-components";

/////// COLORS /////////
export const colorPrimary = "#90d8f0";
export const blueBg = "rgba(144, 216, 240, .5)";
export const colorWhite = "#fafeff";
export const colorBlack = "#011017";
export const colorGrey = "rgb(58, 58, 58)";
export const lightGrey = "#f6f6f4";
export const darkGrey = "#d3d3d3";

////// SHADOWS ////////
export const darkShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
export const lightShadow =
  "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px";

///// COMPONENTS /////
export const Navbar = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  opacity: 0.8;
  font-family: "Raleway";
  font-size: 1.5rem;
  font-weight: lighter;
  width: 100%;
  padding-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding-bottom: 10px;
  }

  @media (min-width: 1800px) {
    font-size: 2.7rem;
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
    grid-gap: 0.1px 20px;
  }
`;

export const Picture = styled.img`
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;

/////// DEV PAGE ///////////

export const Button = styled.button`
  width: 150px;
  outline: none;
  font-weight: 700;
  background-color: ${(props) => props.color};
  color: ${(props) => props.bgColor};
  font-family: "Tangerine", cursive;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  text-shadow: 0.5px 2px 0.5px #696969, 0 0 1em #c0c0c0, 0 0 0.5em ${colorBlack};

  &:active {
    border: 1px solid ${colorBlack};
  }
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 100px;
    font-weight: 400;
    letter-spacing: 0;
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    width: 70px;
    margin-right: 5px;
    font-size: 0.8rem;
    line-height: 12px;
    padding: 7px;
  }
  @media (min-width: 1800px) {
    width: 200px;
    height: 60px;
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
  }
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
  @media (min-width: 1800px) {
    padding: 80px 0 80px 0;
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

  @media (min-width: 1800px) {
    font-size: 60px;
  }
`;
export const RowDirection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const PictureWrapper = styled.div`
  width: 350px;
  overflow: hidden;
  margin-left: 100px;

  @media (max-width: 900px) {
    width: 450px;
    height: 300px;
    margin: 0 0 60px 0;
  }
  @media (max-width: 450px) {
    width: 100%;
    margin: 10px 20px 40px 20px;
  }
  @media (min-width: 1800px) {
    width: 500px;
  }
`;

export const Description = styled.div`
  display: flex;
  color: ${(props) => props.color};
  width: 50%;
  hyphens: auto;
  font-family: "Arial", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  line-height: 1.4rem;
  text-align: center;

  @media (max-width: 900px) {
    width: 90%;
  }
  @media (min-width: 1800px) {
    font-size: 1.5rem;
    letter-spacing: 0.4rem;
    line-height: 2rem;
    width: 60%;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  background-color: ${colorWhite};
  border: 1px solid ${colorBlack};

  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 1800px) {
    width: 200px;
    height: 200px;
  }
`;
