import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home/Home';
import MediaPlayer from './components/mediaPlayer/mediaPlayer';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path='home' element={<Home />} />
          <Route path='media' element={<MediaPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
