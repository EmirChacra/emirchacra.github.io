import "./Music.css";

import { useEffect, useState } from 'react';

import "../../styles/Background.css";
import background1 from "../../assets/backgrounds/homeBackground1.jpg";
import background2 from "../../assets/backgrounds/homeBackground2.jpg";
import background3 from "../../assets/backgrounds/homeBackground3.jpg";
import background4 from "../../assets/backgrounds/homeBackground4.jpg";
import background5 from "../../assets/backgrounds/homeBackground5.jpg";

import earlyRiser from "../../assets/earlyRiser_cover.jpg";
import neonatologia from "../../assets/neonatologia_cover.jpg";
import panoramas from "../../assets/panoramas_cover.jpg";
import ambientes from "../../assets/ambientes_cover.jpg";

const backgroundImages = [earlyRiser, neonatologia, panoramas, ambientes];


function Music() {
    
    const images = backgroundImages.map( (image, index) => <img className='musicImages' key={index} src={image} ></img> )

    return ( 
        <section className='musicSection'>
           {images}
        </section>
    );
}

export default Music;