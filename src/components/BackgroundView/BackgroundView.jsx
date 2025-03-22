import { useEffect, useState } from "react";
import hbg1 from "../../assets/backgrounds/h1.jpg";
import hbg2 from "../../assets/backgrounds/h2.jpg";
import hbg3 from "../../assets/backgrounds/h3.jpg";
import wbg1 from "../../assets/backgrounds/w1.jpg";
import wbg2 from "../../assets/backgrounds/w2.jpg";
import wbg3 from "../../assets/backgrounds/w3.jpg";

function BackgroundView() {
    let backgroundImages;

    const [containerWidth, setContainerWidth] = useState(window.innerWidth);
    const [containerHeight, setContainerHeight] = useState(window.innerHeight);

    // Array of background images
    if (containerHeight >= containerWidth) {
        backgroundImages = [hbg1, hbg2, hbg3];
    }
    else {
        backgroundImages = [wbg1, wbg2, wbg3];
    }

    const bgImg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)]



    useEffect(() => {
        // Resize listener to update container width and height
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
            setContainerHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="background-container"
            style={{
                backgroundImage: `url(${bgImg})`,
                opacity: 0.2
            }}
        >
        </div>
    );
}

export default BackgroundView;