import { useState } from "react";
import Fade from '../../components/Fade/Fade';
import { dataMusic } from "../../helpers/dataMusic";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";
import SlideImages from "./components/SlideImages/SlideImages";

import './Music.css';

function Music() {
    const fullDataMusic = [...dataMusic];
    const [selectedCover, setSelectedCover] = useState(fullDataMusic[0]);

    const onSlideChange = (swiper) => {
        const activeIndex = swiper.realIndex;
        setSelectedCover(fullDataMusic[activeIndex]);
    }

    return (
        <Fade as="div" className="music">
            <InfoDisplay item={selectedCover}/>
            <SlideImages data={fullDataMusic} onSlideChange={onSlideChange}/>
        </Fade>
    );
}

export default Music;
