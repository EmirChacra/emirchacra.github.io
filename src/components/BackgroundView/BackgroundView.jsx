import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import hbg1 from "../../assets/backgrounds/h1.jpg";
import hbg2 from "../../assets/backgrounds/h2.jpg";
import hbg3 from "../../assets/backgrounds/h3.jpg";
import wbg1 from "../../assets/backgrounds/w1.jpg";
import wbg2 from "../../assets/backgrounds/w2.jpg";
import wbg3 from "../../assets/backgrounds/w3.jpg";
import "./Background.css";

function BackgroundView() {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);
  const [bgImg, setBgImg] = useState(hbg1);
  const [backgroundImages, setBackgroundImages] = useState(
    window.innerHeight >= window.innerWidth
      ? [hbg1, hbg2, hbg3]
      : [wbg1, wbg2, wbg3]
  );

  const paths = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    const now = paths.pathname.replace("/", "");
    setPath(now);
  }, [paths.pathname]);

  useEffect(() => {
    // Resize listener to update container width and height
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
      setContainerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    if (containerHeight <= containerWidth) {
      if (backgroundImages[0] != hbg1) {
        setBackgroundImages([hbg1, hbg2, hbg3]);
        setBgImg(
          backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
        );
      }
    } else {
      if (backgroundImages[0] != wbg1) {
        setBackgroundImages([wbg1, wbg2, wbg3]);
        setBgImg(
          backgroundImages[Math.floor(Math.random() * backgroundImages.length)]
        );
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerHeight, containerWidth, backgroundImages]);

  return (
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${bgImg})`,
        opacity: path === "" ? 0.5 : 0.1,
      }}
    ></div>
  );
}

export default BackgroundView;
