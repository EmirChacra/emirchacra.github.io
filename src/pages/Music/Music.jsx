import { useState } from "react";
import { motion } from 'framer-motion';
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
        <motion.div
            className="music"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
            <InfoDisplay item={selectedCover}/>
            <SlideImages data={fullDataMusic} onSlideChange={onSlideChange}/>
        </motion.div>
    );
}

export default Music;


