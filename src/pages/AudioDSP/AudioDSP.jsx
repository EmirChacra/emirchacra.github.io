import Fade from '../../components/Fade/Fade';
import Reverb from "./components/Reverb";
import './AudioDSP.css';

function AudioDSP() {
    return (
        <Fade as="section" className="audio-dsp-container">
            <Reverb />
        </Fade>
    );
}

export default AudioDSP;