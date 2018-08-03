import React from "react";
import { Carousel } from "react-responsive-carousel";

import screen1 from './images/GameScreens/screen1.jpg';
import screen2 from './images/GameScreens/screen2.jpg';
import screen3 from './images/GameScreens/screen3.jpg';

export default () => (
  <Carousel width="400px" autoPlay emulateTouch showArrows={false} infiniteLoop centerMode showThumbs={false}>
    <div>
      <img src={screen1} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={screen2} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={screen3} />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);
