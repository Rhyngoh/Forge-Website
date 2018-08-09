import React from "react";
import { Carousel } from "react-responsive-carousel";
import './css/carousel.min.css';

import screenChallenge from './images/GameScreens/screenChallenge.webp';
import screenCraft from './images/GameScreens/screenCraft.webp';
import screenExplore from './images/GameScreens/screenExplore.webp';
import screenInventory from './images/GameScreens/screenInventory.webp';
import screenDesign from './images/GameScreens/screenDesign.webp';

export default () => (
  <Carousel autoPlay emulateTouch showArrows={false} infiniteLoop centerMode showThumbs={false}>
    <div>
      <img src={screenChallenge} alt='Game Screenshot 1'/>
      <p className="legend">Challenge Mode</p>
    </div>
    <div>
      <img src={screenCraft} alt='Game Screenshot 1'/>
      <p className="legend">Crafting Mode</p>
    </div>
    <div>
      <img src={screenExplore} alt='Game Screenshot 1'/>
      <p className="legend">Explore Mode</p>
    </div>
    <div>
      <img src={screenInventory} alt='Game Screenshot 1'/>
      <p className="legend">Inventory</p>
    </div>
    <div>
      <img src={screenDesign} alt='Game Screenshot 1'/>
      <p className="legend">Make your own level!</p>
    </div>
  </Carousel>
);
