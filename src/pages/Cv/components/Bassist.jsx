import "../../../styles/Sectionsv2.css";
import React, { useState } from 'react';

function Bassist() {

    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleCollapsibleClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    return ( 
        <section className="section-container">

            <h3 className={`collapsible ${isContentVisible ? 'active' : ''}`} onClick={handleCollapsibleClick}>
                bassist
            </h3>

            <div className={`collapsible-content ${isContentVisible ? 'active' : ''}`}>
            <div className="text-container">
                <h4>With monocromo (01/22 - Ongoing)</h4>
                <ul>
                    <li><b>Recordings:</b> Ambientes (EP, Nov 2022).</li>
                </ul>

                <h4>With Nuevalengua (05/16 - 09/18)</h4>
                <ul>
                    <li><b>Recordings:</b> Neonatología (LP, Aug 2018).</li>
                    <li><b>Live performances:</b> Converse Bold Park (2016), Festival Walén (2016), Nuevalengua at Goodstock Bar (2017), Nuevalengua at La Casa del Sol (2018).</li>
                </ul>
            </div>
            </div>
        </section>
    );
}

export default Bassist;
