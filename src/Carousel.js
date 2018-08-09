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
      <img src={screenChallenge} alt='Challenge Mode'/>
      <p className="legend">Challenge Mode</p>
    </div>
    <div>
      <img src={screenCraft} alt='Crafting Mode'/>
      <p className="legend">Crafting Mode</p>
    </div>
    <div>
      <img src={screenExplore} alt='Explore Mode'/>
      <p className="legend">Explore Mode</p>
    </div>
    <div>
      <img src={screenInventory} alt='Collection of Items'/>
      <p className="legend">Collection of Items</p>
    </div>
    <div>
      <img src={screenDesign} alt='Level Design'/>
      <p className="legend">Make your own level!</p>
    </div>
  </Carousel>
);
