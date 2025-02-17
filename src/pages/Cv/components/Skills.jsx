import "../../../styles/Sectionsv2.css";
import React, { useState } from 'react';

function Skills() {

    const [isContentVisible, setIsContentVisible] = useState(false);
    
    const handleCollapsibleClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    return ( 
        <section className="section-container">

            <h3 className={`collapsible ${isContentVisible ? 'active' : ''}`} onClick={handleCollapsibleClick}>
                skills
            </h3>

            <div className={`collapsible-content ${isContentVisible ? 'active' : ''}`}>
            <div className="text-container">
                <h4>Programming languages</h4>
                <ul>
                    <li>Python (Advanced)</li>
                    <li>C++ (Moderate)</li>
                    <li>Git (Moderate)</li>
                    <li>Matlab (Moderate)</li>
                </ul>

                <h4>Audio software</h4>
                <ul>
                    <li>Pd (Advanced)</li>
                    <li> Max MSP (Moderate)</li>
                </ul>

                <h4>Languages</h4>
                <ul>
                    <li>Spanish (Native proficiency)</li>
                    <li>English (Full professional proficiency)</li>
                    <li>French (Elementary proficiency)</li>
                    <li>Portuguese (Elementary proficiency)</li>
                </ul>
            </div>
            </div>
        </section>
    );
}

export default Skills;