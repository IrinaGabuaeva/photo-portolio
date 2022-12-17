import {
  ContentBox,
  Header,
  HeaderBox,
  RowDirection,
  Picture,
  Description,
  blueBg,
  colorBlack,
  PictureWrapper,
} from "../Styles";

export default function About(props) {
  const url = "/images/me2.jpeg";
  const localMode = {
    bg: blueBg,
    text: colorBlack,
  };
  const bgColor =
    props.mode.name === "mixed mode" ? localMode.bg : props.mode.bg;

  const textColor =
    props.mode.name === "mixed mode" ? localMode.text : props.mode.text;
  return (
    <ContentBox id="about" bgColor={bgColor} color={textColor}>
      <HeaderBox color={textColor}>
        <Header color={textColor}>ABOUT</Header>
      </HeaderBox>
      <RowDirection>
        <PictureWrapper>
          <Picture color={textColor} src={url} />
        </PictureWrapper>
        <Description color={textColor}>
          After working in the restaurant industry for 16 years I found myself
          intrigued and fascinated by the software engineering field. It allows
          me to grow professionally and as a person, constantly pushing me out
          of my comfort zone. I am a dedicated worker and my background in the
          service industry had taught me to stay calm under pressure, resolve
          conflicts and be great at communicating. I am looking forward to
          joining a company that is innovative, open-minded and socially
          responsible.
        </Description>
      </RowDirection>
    </ContentBox>
  );
}
