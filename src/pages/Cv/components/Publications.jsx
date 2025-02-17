import "../../../styles/Sectionsv2.css";
import React, { useState } from 'react';

function Publications() {

    const [isContentVisible, setIsContentVisible] = useState(false);
    
    const handleCollapsibleClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    return ( 
        <section className="section-container">

            <h3 className={`collapsible ${isContentVisible ? 'active' : ''}`} onClick={handleCollapsibleClick}>
                publications
            </h3>

            <div className={`collapsible-content ${isContentVisible ? 'active' : ''}`}>
            <div className="text-container">
                <h4>Peer-reviewed journal articles</h4>
                <ol>
                    <li>S. Gonzalez, <b>E. Chacra</b>, C. Carreño, C. Espinoza, “Wooden Mechanical Metamaterials:
                    towards tunable wood plates”, Materials and Design, 221, 110952, 2022.</li>
                </ol>

                <h4>Conference proceedings</h4>
                <ol>
                    <li>C. Espinoza, C. Carreño, <b>E. Chacra</b>, S. Gonzalez, “MetaWood: manipulation of the
                        elastic properties of wood plates by periodic hole patterns”, 2022 Sixteenth International
                        Congress on Artificial Materials for Novel Wave Phenomena (Metamaterials), 2022, pp.
                        139-141.</li>
                </ol>
            </div>
            </div>
        </section>
    );
}

export default Publications;