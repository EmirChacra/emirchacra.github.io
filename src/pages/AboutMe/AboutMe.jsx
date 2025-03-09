import { useEffect, useState } from 'react';
import { motion } from "motion/react";
import LinkedButton from '../../components/LinkedButton/LinkedButton';
import "../../styles/Background.css"; 
import "../../styles/Sectionsv2.css";

import cvpdf from "../../assets/cv.pdf";
import biopic from "../../assets/biopic.jpg";

import hbg1 from "../../assets/backgrounds/h1.jpg";
import hbg2 from "../../assets/backgrounds/h2.jpg";
import hbg3 from "../../assets/backgrounds/h3.jpg";
import wbg1 from "../../assets/backgrounds/w1.jpg";
import wbg2 from "../../assets/backgrounds/w2.jpg";
import wbg3 from "../../assets/backgrounds/w3.jpg";

function AboutMe() {

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

                <div className="flex-container">
                <div className="text-container">
                    <h2 className='title'>about.me</h2>

                    <p>I'm Emir Chacra, a music producer, bass player, and audio DSP developer from Chile.
                    I'm currently pursuing a Ph.D. in Computer music at University of California, San Diego,
                    where I'm doing research on Digital Audio Effects for both VSTs and hardware.</p>
                    <p>As monocromo, my music producer alias, I'm interested in merging latin-inspired rhythms
                    with Jazz, Deep House, Shoegaze, and Post-Punk sonorities.</p>
                    <p>I'm also a film photographer :)</p>

                    <LinkedButton link={cvpdf} text="Download CV"/>
                    <br/>
                    <br/>
                </div> 
        
                <img className='img' src={biopic} alt="Bio Pic" />
                </div>
            </section>
        </motion.div>
     );
}

export default AboutMe;