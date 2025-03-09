import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {Route, Routes, HashRouter} from "react-router";
import { AnimatePresence } from "motion/react";
import Homev2 from './pages/Home/Homev2';
import AboutMe from './pages/AboutMe/AboutMe';
import CV from './pages/Cv/Cv';
import Music from './pages/Music/Music';
import AudioDSP from './pages/AudioDSP/AudioDSP';
import MediaPlayer from './components/MediaPlayer/MediaPlayer';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimatePresence mode={"wait"}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>} >
          <Route path='/' element={<Homev2/>} />
          <Route path='about' element={<AboutMe/>} />
          <Route path='cv' element={<CV/>} />
          <Route path='music' element={<Music/>} />
          <Route path='audiodsp' element={<AudioDSP/>} />
          <Route path='media' element={<MediaPlayer/>} />
        </Route>
      </Routes>
    </HashRouter>
    </AnimatePresence>
  </StrictMode>,
)
