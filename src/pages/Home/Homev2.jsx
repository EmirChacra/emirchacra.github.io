import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Fade from "../../components/Fade/Fade";
import "./Homev2.css";
import "../../styles/Background.css";

function Homev2() {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);

  const speed = 0.0005;
  const generateRandomDirection = () =>
    Math.random() > 0.5 ? speed : -1.0 * speed;
  const generateRandomPosition = () => 0.3 + 0.35 * Math.random();

  // Tags data
  const tagsData = [
    { text: "about.me", href: "/about.me" },
    { text: "music", href: "/music" },
    { text: "cv", href: "/cv" },
    { text: "audio.dsp", href: "/audio.dsp" },
  ];

  // Generate initialTags position over tags data
  const initialTags = tagsData.map((tag) => ({
    ...tag,
    top: generateRandomPosition(),
    left: generateRandomPosition(),
  }));

  const [tags, setTags] = useState(
    initialTags.map((tag, index) => ({
      ...tag,
      top: initialTags[index].top,
      left: initialTags[index].left,
      dx: generateRandomDirection(),
      dy: generateRandomDirection(),
      hovering: false, // Track if tag is being hovered
    }))
  );

  useEffect(() => {
    // Resize listener to update container width and height
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
      setContainerHeight(window.innerHeight);

      // Slow transition back to initial positions
      setTags((prevTags) =>
        prevTags.map((tag, index) => {
          const initialPosition = initialTags[index];
          const transitionSpeed = 0.01; // Adjust this for smoother or faster transitions

          return {
            ...tag,
            left:
              tag.left + (initialPosition.left - tag.left) * transitionSpeed,
            top: tag.top + (initialPosition.top - tag.top) * transitionSpeed,
          };
        })
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const moveTags = () => {
      setTags((prevTags) =>
        prevTags.map((tag) => {
          let newTop = tag.top + tag.dy;
          let newLeft = tag.left + tag.dx;
          let newDx = tag.dx;
          let newDy = tag.dy;

          // Obtiene el tamaño real del elemento
          const tagElement = document.getElementById(`tag-${tag.text}`);
          const width = tagElement ? tagElement.offsetWidth : tag.width;
          const height = tagElement ? tagElement.offsetHeight : tag.height;

          // Rebote en bordes
          if (newLeft <= 0 || newLeft + width / containerWidth >= 1) {
            newDx *= -1;
          }
          if (newTop <= 0 || newTop + height / containerHeight >= 1) {
            newDy *= -1;
          }

          //Detiene cuando hover
          if (tag.hovering) {
            newDx *= 0.9;
            newDy *= 0.9;
          }

          return { ...tag, left: newLeft, top: newTop, dx: newDx, dy: newDy };
        })
      );

      animationFrameId = requestAnimationFrame(moveTags);
    };

    animationFrameId = requestAnimationFrame(moveTags);

    return () => cancelAnimationFrame(animationFrameId);
  }, [containerWidth, containerHeight]);

  // Handle mouse enter to slow down the movement
  const handleMouseEnter = (index) => {
    setTags((prevTags) =>
      prevTags.map((tag, i) => (i === index ? { ...tag, hovering: true } : tag))
    );
  };

  // Handle mouse leave to restore the last known speed
  const handleMouseLeave = (index) => {
    setTags((prevTags) =>
      prevTags.map((tag, i) =>
        i === index
          ? {
              ...tag,
              hovering: false,
              dx: generateRandomDirection(),
              dy: generateRandomDirection(),
            }
          : tag
      )
    );
  };

  return (
    <Fade
      as="div"
      className="landing-container"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <h1 className="landing-title">emir chacra</h1>

      {tags.map((tag, index) => (
        <NavLink
          key={index}
          to={tag.href}
          id={`tag-${tag.text}`}
          className="tag"
          style={{
            position: "absolute",
            top: `${tag.top * containerHeight}px`, // Convert to pixel value
            left: `${tag.left * containerWidth}px`, // Convert to pixel value
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          {tag.text}
        </NavLink>
      ))}
    </Fade>
  );
}

export default Homev2;
