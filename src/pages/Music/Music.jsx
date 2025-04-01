import { useState } from "react";
import { dataMusic } from "../../helpers/dataMusic";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";
import SlideImages from "./components/SlideImages/SlideImages";

import './Music.css';

function Music() {
    const fullDataMusic = [...dataMusic, ...dataMusic];
    const [selectedCover, setSelectedCover] = useState(fullDataMusic[0]);

    const onSlideChange = (swiper) => {
        const activeIndex = swiper.realIndex;
        setSelectedCover(fullDataMusic[activeIndex]);
    }

    return (

        <div className="music">
            <div className="info-div-container">
                <InfoDisplay item={selectedCover} />
            </div>
            <SlideImages data={fullDataMusic} onSlideChange={onSlideChange} />
        </div>

    );
}

export default Music;


