import { useEffect, useState } from 'react';
import { motion } from "motion/react";
import "../../styles/Background.css";

import hbg1 from "../../assets/backgrounds/h1.jpg";
import hbg2 from "../../assets/backgrounds/h2.jpg";
import hbg3 from "../../assets/backgrounds/h3.jpg";
import wbg1 from "../../assets/backgrounds/w1.jpg";
import wbg2 from "../../assets/backgrounds/w2.jpg";
import wbg3 from "../../assets/backgrounds/w3.jpg";


import Reverb from "./components/Reverb";

function AudioDSP() {

    let backgroundImages;
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const [containerHeight, setContainerHeight] = useState(window.innerHeight);
    
    // Array of background images
    if (containerHeight >= containerWidth)
    {
        backgroundImages = [hbg1, hbg2, hbg3];
    }
    else
    {
        backgroundImages = [wbg1, wbg2, wbg3];
    }

    // Select a random background image on component mount
    const [bgImage, setBgImage] = useState(backgroundImages[Math.floor(Math.random() * backgroundImages.length)]);

    return ( 
        <motion.div initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{duration: 1.5}}>
            <div
            className="background-container"
            style={{ backgroundImage: `url(${bgImage})`}}
            >   
            </div>
            <section className="section-container">
                <h2 className='title'>audio.dsp</h2>
                <Reverb />
                <Reverb />
            </section>
        </motion.div>
     );
}

export default AudioDSP;