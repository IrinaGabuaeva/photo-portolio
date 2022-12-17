import React, { useState, useEffect } from "react";
import { Header, lightGrey, darkGrey, colorWhite } from "../../Styles.js";
import axios from "axios";
import styled from "styled-components";

export default function About() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/api/about");
      setImages(data);
    }
    fetchData();
  }, []);
  const urlArray = images.map((image) => {
    return image["url"];
  });

  return (
    <Content>
      <SectionBox>
        <Title>Photographer</Title>
        <PictureBox src={urlArray[2]} />
      </SectionBox>
      <RightBox>
        <Title>Software Engineer</Title>
        <PictureBox src={urlArray[0]} />
      </RightBox>
      <SectionBox>
        <Title>Cat lover</Title>
        <PictureBox src={urlArray[3]} />
      </SectionBox>
      <RightBox>
        <Title>Art enthusiast</Title>
        <PictureBox src={urlArray[1]} />
      </RightBox>
      <SectionBox>
        <Title>Mindfulness maniac</Title>
        <PictureBox src={urlArray[3]} />
      </SectionBox>
      <RightBox>
        <Title>Danceaholic</Title>
        <PictureBox src={urlArray[1]} />
      </RightBox>
      <StoryBox>
        <StoryTitle>Why I am in love with photography</StoryTitle>
        <StoryText>
          I have been taking pictures ever since I can remember. My granfather
          was a photography enthusiast. He had a Kiev camera, which he used to
          document his kids(my mother and my aunt) childhood, and then, later
          on, my cousins', my sister's and mine. I remember the fascination I
          felt sitting in his darkroom in the attic, where he was no longer my
          grandfather, but a mystical magician- dipping blank paper into
          potions, hanging it and making images appear out of thin air. I grew
          up, but my enchantment with photography never went away. Even when
          using digital camera, I still experience the magic of stopping time
          for just an instant, capturing a unique moment that will never ever be
          repeated! What is that, if not magic? :){" "}
        </StoryText>
      </StoryBox>
    </Content>
  );
}

//// STYLES ////
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${darkGrey};
  left: 0;
  top: 40%;
`;
const SectionBox = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  background-color: ${lightGrey};
`;

const RightBox = styled(SectionBox)`
  margin-left: auto;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 100;
  font-family: "Tangerine", cursive;
  font-style: italic;
  letter-spacing: 0.3rem;
`;
const PictureBox = styled.img`
  height: 200px;
`;
const StoryBox = styled.div`
  padding: 60px;
  text-align: center;
  background-color: white;
`;
const StoryTitle = styled(Header)`
  font-size: 45px;
  letter-spacing: 0.1rem;
  font-weight: 200;
  padding: 10px 0 10px 0;
`;
const StoryText = styled.p`
  padding: 10px;
  font-size: 20px;
  font-family: "Serif";
`;
