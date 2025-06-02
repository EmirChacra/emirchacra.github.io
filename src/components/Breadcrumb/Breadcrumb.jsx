import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./Breadcrumb.css";

function Breadcrumb({ onNavigate }) {
  const paths = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    const now = paths.pathname.replace("/", "");
    setPath(now);
  }, [paths.pathname]);

  const showPath = (path) => {
    if (path.length === 0) return null;
    return (
      <div className="breadcrumb">
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (typeof onNavigate === "function") onNavigate("/");
            }}
          >
            home
          </a>{" "}
          / {path}
        </p>
      </div>
    );
  };

  return showPath(path);
}

export default Breadcrumb;
