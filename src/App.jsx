import { Outlet, useNavigate, useLocation } from "react-router";
import BackgroundView from "./components/BackgroundView/BackgroundView";
import { useEffect, useState } from "react";
import Fade from "./components/Fade/Fade";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

function App() {
  const [isExiting, setIsExiting] = useState(false);
  const [nextUrl, setNextUrl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (url) => {
    setNextUrl(url);
    setIsExiting(true);
  };

  // Reset fade-out state on location change (nueva ruta)
  useEffect(() => {
    setIsExiting(false);
    setNextUrl(null);
  }, [location.pathname]);

  return (
    <div>
      <BackgroundView />
      <Breadcrumb onNavigate={handleNavigate} />
      <Fade
        isExiting={isExiting}
        onExited={() => {
          if (nextUrl) navigate(nextUrl);
        }}
      >
        <Outlet />
      </Fade>
    </div>
  );
}

export default App;
