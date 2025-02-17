import "../../../styles/Sectionsv2.css";
import React, { useState } from 'react';

function ResearchExperience() {

    const [isContentVisible, setIsContentVisible] = useState(false);
    
    const handleCollapsibleClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (  
        <section className="section-container">

            <h3 className={`collapsible ${isContentVisible ? 'active' : ''}`} onClick={handleCollapsibleClick}>
                research experience
            </h3>

            <div className={`collapsible-content ${isContentVisible ? 'active' : ''}`}>
            <div className="text-container">
                <ul>
                    <li>INRIA Chile, R&D Engineer (03/23 - 08/23)
                        <ul>
                            <li><b>Advisor:</b> Hugo Carrillo.</li>
                        </ul>
                    </li>
                    <li>CMM, Universidad de Chile, Research Assistant (07/22 - 07/23)
                        <ul>
                            <li><b>Advisor:</b> Axel Osses.</li>
                        </ul>
                    </li>
                    <li>CMM, Universidad de Chile, Research Assistant (01/21 - 03/21)
                        <ul>
                            <li><b>Advisors:</b> Jocelyn Dunstan, Alejandro Maass.</li>
                        </ul>
                    </li>
                    <li>ALeRCE, Universidad de Chile, Research Assistant (04/19 - 12/19)
                        <ul>
                            <li><b>Advisor:</b> Francisco Förster.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </section>
    );
}

export default ResearchExperience;