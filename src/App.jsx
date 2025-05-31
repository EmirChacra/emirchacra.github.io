import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import BackgroundView from "./components/BackgroundView/BackgroundView";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

function App() {
  return (
    <div>
      <BackgroundView />
      <Breadcrumb />
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default App;
