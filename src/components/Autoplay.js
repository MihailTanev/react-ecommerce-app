import React from "react";
import Slider from "react-animated-slider";
import horizontalCss from "./horizontal.css";
import content from "../sliderdata";

function Autoplay() {
  return (
    <div>
      <Slider classNames={horizontalCss} autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
                item.image
              }) center/cover fixed no-repeat`
            }}
          >
            <div className="center">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Autoplay;
