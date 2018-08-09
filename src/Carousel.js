import React from "react";
import { Carousel } from "react-responsive-carousel";
import './css/carousel.min.css';

import screen1 from './images/GameScreens/horizontal1.jpg';
import screen2 from './images/GameScreens/horizontal2.png';

export default () => (
  <Carousel autoPlay emulateTouch showArrows={false} infiniteLoop centerMode showThumbs={false}>
    <div>
      <img src={screen1} alt='Game Screenshot 1'/>
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={screen2} alt='Game Screenshot 2'/>
      <p className="legend">Legend 2</p>
    </div>
  </Carousel>
);
