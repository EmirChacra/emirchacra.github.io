import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import "./Breadcrumb.css";

function Breadcrumb({ onNavigate }) {
  const paths = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    const now = paths.pathname.replace("/", "");
    setPath(now);
  }, [paths.pathname]);
  const showPath = (path) => {
    return (
      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <AnimatePresence mode="wait" initial={false}>
            {path.length <= 0 ? (
              <motion.p
                key="brand"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{ position: "absolute", width: "100%" }}
              >
                emir chacra
              </motion.p>
            ) : (
              <motion.p
                key="crumbs"
                style={{
                  textWrap: "nowrap",
                  position: "absolute",
                  width: "100%",
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (typeof onNavigate === "function") onNavigate("/");
                  }}
                >
                  home
                </a>{" "}
                / <span style={{ display: "inline-block" }}>{path}</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return showPath(path);
}

export default Breadcrumb;
