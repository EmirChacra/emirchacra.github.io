import { useEffect, useState } from 'react';
import "../../styles/Background.css"; 
import "../../styles/Sectionsv2.css";
import LinkedButton from '../../components/LinkedButton/LinkedButton';
import cvpdf from "../../assets/cv.pdf";
import biopic from "../../assets/biopic.jpg";
import background1 from "../../assets/backgrounds/homeBackground1.jpg";
import background2 from "../../assets/backgrounds/homeBackground2.jpg";
import background3 from "../../assets/backgrounds/homeBackground3.jpg";
import background4 from "../../assets/backgrounds/homeBackground4.jpg";
import background5 from "../../assets/backgrounds/homeBackground5.jpg";

function AboutMe() {

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
        <section className="section-container">
            
            <div className="flex-container">
            <div className="text-container">
                <h2 className='title'>about me</h2>
                
                <p>I'm Emir Chacra, a music producer, bass player, and audio DSP developer from Chile.
                I'm currently pursuing a Ph.D. in Computer music at University of California, San Diego,
                where I'm doing research on Digital Audio Effects for both VSTs and hardware.</p>
                <p>As monocromo, my music producer alias, I'm interested in merging latin-inspired rhythms
                with Jazz, Deep House, Shoegaze, and Post-Punk sonorities.</p>
                <p>I'm also a film photographer :)</p>

                <LinkedButton link={cvpdf} text="Download CV"/>
            </div> 
    
            <img className='img' src={biopic} alt="Bio Pic" />
            </div>
        </section>
        </div>
     );
}

export default AboutMe;