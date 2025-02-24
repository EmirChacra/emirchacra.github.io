import { useEffect, useState } from 'react';
import "../../styles/Sectionsv2.css";

import "../../styles/Background.css";
import background1 from "../../assets/backgrounds/homeBackground1.jpg";
import background2 from "../../assets/backgrounds/homeBackground2.jpg";
import background3 from "../../assets/backgrounds/homeBackground3.jpg";
import background4 from "../../assets/backgrounds/homeBackground4.jpg";
import background5 from "../../assets/backgrounds/homeBackground5.jpg";

import cvpdf from "../../assets/cv.pdf";
import LinkedButton from "../../components/LinkedButton/LinkedButton";
import Education from "./components/Education";
import ResearchExperience from "./components/ResearchExperience";
import Publications from "./components/Publications";
import TeachingExperience from "./components/TeachingExperience";
import AudioEngineering from "./components/AudioEngineering";
import Bassist from "./components/Bassist";
import Skills from "./components/Skills";

function CV() {

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
                <div className="text-container">
                    <h2 className='title'>résumé / CV <LinkedButton link={cvpdf} text="Download pdf"/> </h2>

                    <Education/>
                    <ResearchExperience/>
                    <Publications/>
                    <TeachingExperience/>
                    <AudioEngineering/>
                    <Bassist/>
                    <Skills/>
                </div>
        </section>
        </div>
    );
}

export default CV;