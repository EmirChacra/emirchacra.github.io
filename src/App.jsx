import { Outlet, useNavigate, useLocation } from "react-router";
import BackgroundView from "./components/BackgroundView/BackgroundView";
import { useEffect, useState } from "react";
import Fade from "./components/Fade/Fade";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

function App() {
  const [isExiting, setIsExiting] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (url) => {
    setNextUrl(url);
    setIsExiting(true);
  };

  // Fade in inicial al montar
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  // Reset fade-out state on location change (nueva ruta)
  useEffect(() => {
    setIsExiting(false);
    setNextUrl(null);
  }, [location.pathname]);

  return (
    <div>
      <Fade>
        <BackgroundView />
      </Fade>

      <div style={{ maxWidth: "2040px", margin: "auto", position: "relative" }}>
        <Breadcrumb onNavigate={handleNavigate} />
        {hasLoaded && (
          <Fade
            isExiting={isExiting}
            onExited={() => {
              if (nextUrl) navigate(nextUrl);
            }}
          >
            <Outlet />
          </Fade>
        )}
      </div>
    </div>
  );
}

export default App;
