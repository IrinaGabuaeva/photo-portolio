import { React, Component } from "react";
import "../App.css";

export default class Nature extends Component {
  state = {
    images: [
      {
        urls:
          "https://lh3.googleusercontent.com/1UxU2saHg1lRFxowJDgJF8sp-3eAiWSIMpqlksdLawoKKmeGeiAJEq4GoV4qL4S-8gNXRQL-Y7ujtFI6THC-RDRJQ9DpWfJktQHnZq3P_lGwbr1HUAEBjKKynZOQKCMF8NBfxxBh0Ew=w2400?source=screenshot.guru",
      },
      {
        urls:
          "https://lh3.googleusercontent.com/xEo-GiGH8VSjaPl9sddZR6y7E4hAkeizc8C2EVVrDrFL_R4y_lLlytu_2Amx3Mlfa-NK-kYLBn_L3aIrZ-Iv-vQwKuZjnpdVMXRVG-9kaqeFKw4OXSNCKN8PjvYgZcSe175RaIdivW8=w2400?source=screenshot.guru",
      },
      {
        urls:
          "https://lh3.googleusercontent.com/pbJuaGUBNT1riluBfYJrmAUv4FvrppYjeX2xC1E8h-pQb93cWBjZo7WxKEGwT-75JyKeTYJS3SPnQadk1kwS1XogkOQwnVMpPauCjKKC8JsTT97cFFR1pQrJiyYGkuzmJYmTVe3gEao=w2400",
      },
    ],
  };
  render() {
    console.log("STATE", this.state);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.urls} />;
  });

  return <div className="image-list">{images}</div>;
};
