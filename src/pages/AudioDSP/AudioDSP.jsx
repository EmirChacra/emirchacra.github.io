import Fade from '../../components/Fade/Fade';
import Reverb from "./components/Reverb";

function AudioDSP() {
    return (
        <Fade as="section" className="section-container">
            <Reverb />
            <Reverb />
        </Fade>
    );
}

export default AudioDSP;