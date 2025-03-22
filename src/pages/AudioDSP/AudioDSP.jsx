import "../../styles/Background.css";
import Reverb from "./components/Reverb";

function AudioDSP() {

    return (
        <section className="section-container">
            <h2 className='title'>audio.dsp</h2>
            <Reverb />
            <Reverb />
        </section>
    );
}

export default AudioDSP;