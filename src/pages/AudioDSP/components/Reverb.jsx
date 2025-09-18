import MediaPlayer from "../../../components/MediaPlayer/MediaPlayer";
import reverbdrums from "../../../assets/audio_files/ReverbDrums.wav";
import reverbguitar from "../../../assets/audio_files/ReverbGuitar.wav";
import "../AudioDSP.css";

function Reverb() {
    return (
        <div className="audio-dsp-flex-container">
            <div className="audio-dsp-text-container">
                <h3 className="audio-dsp-title">Reverb</h3>
                <p>The main goal of this experiment is to create a reverb algorithm with a size parameter that doesn't
                change the delay time of the reverb structure. This allow to automate or adjust in realtime
                the size of the reverb without making the swish/swoosh sound. </p>
            </div>

            <div className="audio-dsp-button-container">
                <MediaPlayer sound={reverbdrums} title={"Hear it on drums."}/>
                <MediaPlayer sound={reverbguitar} title={"Hear it on guitar."}/>
            </div>
        </div>
    );
}

export default Reverb;