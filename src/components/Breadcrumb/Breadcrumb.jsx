import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import "./Breadcrumb.css";

function Breadcrumb({ onNavigate }) {
  const loc = useLocation();
  const [path, setPath] = useState("");
  const [isHoveringRoute, setIsHoveringRoute] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const now = loc.pathname.replace("/", "");
    setPath(now);
  }, [loc.pathname]);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const handleHoverChange = (state) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    if (state) {
      setIsHoveringRoute(true);
    } else {
      hoverTimeout.current = setTimeout(() => {
        setIsHoveringRoute(false);
      }, 120);
    }
  };

  const routes = [
    { id: "", label: "home", path: "/" },
    { id: "about.me", label: "about.me", path: "/about.me" },
    { id: "cv", label: "cv", path: "/cv" },
    { id: "music", label: "music", path: "/music" },
    { id: "audio.dsp", label: "audio.dsp", path: "/audio.dsp" },
  ];

  // Exclude current route and 'home' from menu
  const otherRoutes = routes.filter((r) => r.id !== path && r.id !== "");

  const handleNavigate = (p) => {
    if (typeof onNavigate === "function") onNavigate(p);
  };

  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb">
        <AnimatePresence mode="wait" initial={false}>
          {path.length <= 0 ? (
            <motion.div
              key="brand"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              style={{ position: "absolute", width: "100%" }}
              className="breadcrumb-content"
            >
              emir chacra
            </motion.div>
          ) : (
            <motion.div
              key="crumbs"
              style={{
                textWrap: "nowrap",
                position: "relative",
                width: "100%",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="breadcrumb-content"
            >
              <span
                className="breadcrumb-hover-wrapper"
                style={{ position: "relative", display: "inline-block" }}
              >
                <span className="home-hover-area">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate("/");
                    }}
                  >
                    home
                  </a>{" "}
                  /{" "}
                  <span
                    className="route-hover-area"
                    style={{ display: "inline-block" }}
                    onMouseEnter={() => handleHoverChange(true)}
                    onMouseLeave={() => handleHoverChange(false)}
                  >
                    {path}
                    <AnimatePresence>
                      {isHoveringRoute && (
                        <motion.ul
                          className="crumb-menu"
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => handleHoverChange(true)}
                          onMouseLeave={() => handleHoverChange(false)}
                        >
                          {otherRoutes.map((r) => (
                            <motion.li
                              key={r.id}
                              className="crumb-item"
                              whileHover={{ scale: 1.02 }}
                              onClick={() => handleNavigate(r.path)}
                              style={{ cursor: "pointer" }}
                            >
                              <span style={{ display: "block", width: "100%", height: "100%" }}>
                                {r.label}
                              </span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </span>
                </span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Breadcrumb;
