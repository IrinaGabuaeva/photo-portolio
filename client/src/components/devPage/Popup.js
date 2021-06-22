import styled from "styled-components";
import { colorPrimary, colorBlack, Logo } from "../../Styles";
import smileyLogo from "../Logos/smily_face.svg";
import sunLogo from "../Logos/happy_sun.svg";

export default function Popup(props) {
  return (
    <PopupBox>
      <Box>
        {props.content}
        <PopupLogo src={sunLogo} />
      </Box>
    </PopupBox>
  );
}

/// Popup style /////

const PopupBox = styled.div`
  position: fixed;
  background: ${colorBlack};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.9;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 50%;
  margin: 0 auto;
  opacity: 1;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 60vh - 20px);
  background-color: ${colorBlack};

  padding: 15px;
  border: 1px solid ${colorPrimary};
  overflow: auto;
  border-radius: 5px;
`;

const PopupLogo = styled.img`
  background-color: ${colorBlack};
  width: 35px;
  height: 35px;
  margin: -10px 0 10px 0;

  @media (min-width: 1800px) {
    width: 50px;
    height: 50px;
  }
`;
