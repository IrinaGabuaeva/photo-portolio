import { Component } from "react";
import React from "react";
import { StyledImageList, Picture, Container } from "../Styles.js";

export default class About extends Component {
  state = {
    images: [
      {
        id: 1,
        urls:
          "https://lh3.googleusercontent.com/1UxU2saHg1lRFxowJDgJF8sp-3eAiWSIMpqlksdLawoKKmeGeiAJEq4GoV4qL4S-8gNXRQL-Y7ujtFI6THC-RDRJQ9DpWfJktQHnZq3P_lGwbr1HUAEBjKKynZOQKCMF8NBfxxBh0Ew=w2400?source=screenshot.guru",
      },
      {
        id: 2,
        urls:
          "https://lh3.googleusercontent.com/xEo-GiGH8VSjaPl9sddZR6y7E4hAkeizc8C2EVVrDrFL_R4y_lLlytu_2Amx3Mlfa-NK-kYLBn_L3aIrZ-Iv-vQwKuZjnpdVMXRVG-9kaqeFKw4OXSNCKN8PjvYgZcSe175RaIdivW8=w2400?source=screenshot.guru",
      },
      {
        id: 3,
        urls:
          "https://lh3.googleusercontent.com/pbJuaGUBNT1riluBfYJrmAUv4FvrppYjeX2xC1E8h-pQb93cWBjZo7WxKEGwT-75JyKeTYJS3SPnQadk1kwS1XogkOQwnVMpPauCjKKC8JsTT97cFFR1pQrJiyYGkuzmJYmTVe3gEao=w2400",
      },
      {
        id: 4,
        urls:
          "https://lh3.googleusercontent.com/FzQHmnFqJ2aMsgxhmTW_V1oJ7Zt0K456DU8Y8BRd1K_Oj9ZLiV8FNJK_ByHPVaBiwYMk04qRvs6LJDjNGb8rnTYSVF4WpUQXFMSoahpXlxdHGivggkL9Pq3LyNY3Zd6AdlcwpSsR8cI=w2400",
      },
      {
        id: 5,
        urls:
          "https://lh3.googleusercontent.com/zLL0lMrU_vzvrYHgi8yBwddnR3ohmhArawe8QNFSj4xdPOoy2pjWfUOsgPK5KHbITvxC3KAZB7OGlcAUc9bDF3BpdDNcT77q7EPtTvUqJViaOG95HzXgkw9rWVeayp_WyD-kAzxrgAQ=w2400",
      },
      {
        id: 6,
        urls:
          "https://lh3.googleusercontent.com/VolMq3vQLIlDLBp88Y8LMi-W4V549kBUsTcouuuvAugANwwaxqVZB0XXstYl0p987g2tCn4JwJOWXina4MCJv9kpfAdXOZ0DuWP91J-_o3XDXt-aqJ-wh-wxnBzPW6pCG59WzZo7yfU=w2400",
      },
      {
        id: 7,
        urls:
          "https://lh3.googleusercontent.com/SbI2i2YFpBkWfSzF9GL2TsSDJBOX2SCHkZdyVCE63Ea3r5ApNRPlHPFYTPGmWqSVF6lS5rbLsz8LGmKrRC1TAoBcYZFqj_IFYtCmhIZMZFf4zNZGZyMpHYnghNnapO1TdODgytIaY8c=w2400",
      },
    ],
  };
  render() {
    console.log("STATE", this.state);
    return (
      <Container>
        <ImageList images={this.state.images} />
      </Container>
    );
  }
}
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <StyledImageList className="image-list">{images}</StyledImageList>;
};

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
    window.addEventListener("resize", this.setSpans);
  }

  componentWillUnmount() {
    this.imageRef.current.removeEventListener("load", this.setSpans);
    window.removeEventListener("resize", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = height + 10;
    this.setState({ spans: spans });
  };

  render() {
    console.log("STATE", this.state);
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Picture ref={this.imageRef} src={urls} alt={description} />
      </div>
    );
  }
}
