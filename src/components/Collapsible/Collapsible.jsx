import { useState, useRef, Children } from "react";
import "./Collapsible.css";

function Collapsible({ children, title }) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const contentRef = useRef(null);

  const handleCollapsibleClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div>
      <h3 className={`collapsible`} onClick={handleCollapsibleClick}>
        {title}
      </h3>
      <div
        className={`collapsible-content `}
        ref={contentRef}
        style={{
          height: isContentVisible
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
      >
        {Children.map(children, (child) => {
          return child;
        })}
      </div>
    </div>
  );
}

export default Collapsible;
