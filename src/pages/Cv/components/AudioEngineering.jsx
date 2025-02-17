import "../../../styles/Sectionsv2.css";
import React, { useState } from 'react';

function AudioEngineering() {

    const [isContentVisible, setIsContentVisible] = useState(false);

    const handleCollapsibleClick = () => {
        setIsContentVisible(!isContentVisible);
    };

    return ( 
        <section className="section-container">

            <h3 className={`collapsible ${isContentVisible ? 'active' : ''}`} onClick={handleCollapsibleClick}>
                audio engineering
            </h3>

            <div className={`collapsible-content ${isContentVisible ? 'active' : ''}`}>
            <div className="text-container">
                <h4>As a producer</h4>
                <ul>
                    <li>early riser - monocromo (EP, Nov 2024): main producer as <i>monocromo</i></li>
                    <li>Panoramas - monocromo (LP, Jun 2023): main producer as <i>monocromo</i></li>
                    <li>Ambientes - monocromo (EP, Nov 2022): main producer as <i>monocromo</i></li>
                    <li>Neonatología - monocromo (LP, Aug 2018): co-producer as <i>Emir Chacra</i></li>
                </ul>

                <h4>As a mixing engineer</h4>
                <ul>
                    <li>early riser - monocromo (EP, Nov 2024)</li>
                    <li>Panoramas - monocromo (LP, Jun 2023)</li>
                    <li>Ambientes - monocromo (EP, Nov 2022)</li>
                    <li>Neonatología - monocromo (LP, Aug 2018)</li>
                </ul>
            </div>
            </div>
        </section>
    );
}

export default AudioEngineering;