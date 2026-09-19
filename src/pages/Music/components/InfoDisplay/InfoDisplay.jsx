import "./InfoDisplay.css";
import { motion } from "motion/react";

function InfoDisplay(item) {
  const showElement = ({ item }) => {
    return (
      <motion.div
        key={item.title}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="info-display-container"
      >
        <div className="info-display">
          <div className="content-info-display">
            <h2 className="title">{item.title}</h2>
            <>{item.description}</>
          </div>
          <div className="image-container">
            <img className="img" src={item.img} alt="Cover" />
          </div>
        </div>
      </motion.div>
    );
  };

  return <> {showElement(item)} </>;
}

export default InfoDisplay;
