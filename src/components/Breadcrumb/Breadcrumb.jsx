import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import "./Breadcrumb.css";

function Breadcrumb({ onNavigate }) {
  const loc = useLocation();
  const [path, setPath] = useState("");
  const [isHoveringRoute, setIsHoveringRoute] = useState(false);

  useEffect(() => {
    const now = loc.pathname.replace("/", "");
    setPath(now);
  }, [loc.pathname]);

  const routes = [
    { id: "", label: "home", path: "/" },
    { id: "about.me", label: "about.me", path: "/about.me" },
    { id: "cv", label: "cv", path: "/cv" },
    { id: "music", label: "music", path: "/music" },
    { id: "audio.dsp", label: "audio.dsp", path: "/audio.dsp" },
    { id: "media", label: "media", path: "/media" },
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
                position: "relative",
                width: "100%",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <span
                className="home-hover-area"
                onMouseEnter={() => setIsHoveringRoute(true)}
                onMouseLeave={() => setIsHoveringRoute(false)}
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate("/");
                  }}
                >
                  home
                </a>{" "}
                / <span style={{ display: "inline-block" }}>{path}</span>
                {/* show expanded menu only on hover over the whole block */}
                {isHoveringRoute && (
                  <motion.ul
                    className="crumb-menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {otherRoutes.map((r) => (
                      <motion.li
                        key={r.id}
                        className="crumb-item"
                        whileHover={{ scale: 1.02 }}
                      >
                        <a
                          href={r.path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigate(r.path);
                          }}
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          {r.label}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Breadcrumb;
