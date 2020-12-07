import styled from "styled-components";

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

//////// GRID

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
