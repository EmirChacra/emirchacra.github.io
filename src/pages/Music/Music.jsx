import { useEffect, useState } from 'react';

import "../../styles/Background.css";
import background1 from "../../assets/backgrounds/homeBackground1.jpg";
import background2 from "../../assets/backgrounds/homeBackground2.jpg";
import background3 from "../../assets/backgrounds/homeBackground3.jpg";
import background4 from "../../assets/backgrounds/homeBackground4.jpg";
import background5 from "../../assets/backgrounds/homeBackground5.jpg";

import EarlyRiser from "./components/EarlyRiser";
import Panoramas from "./components/Panoramas";
import Ambientes from "./components/Ambientes";
import Neonatologia from "./components/Neonatologia";

function Music() {
    // Array of background images
    const backgroundImages = [background1, background2, background3, background4, background5];
            
    // Select a random background image on component mount
    const [bgImage, setBgImage] = useState(backgroundImages[Math.floor(Math.random() * backgroundImages.length)]);

    return ( 
        <div>
        <div
            className="background-container"
            style={{ backgroundImage: `url(${bgImage})`,
                     opacity: 0.1}}
        >   
        </div>
        
        <EarlyRiser/>
        <Panoramas/>
        <Ambientes/>
        <Neonatologia/>
        </div>
    );
}

export default Music;