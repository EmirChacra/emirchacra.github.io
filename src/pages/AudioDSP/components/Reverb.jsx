import "../../../styles/Sectionsv2.css";
import MediaPlayer from "../../../components/MediaPlayer/MediaPlayer";

import reverbdrums from "../../../assets/audio_files/ReverbDrums.wav";
import reverbguitar from "../../../assets/audio_files/ReverbGuitar.wav";

function Reverb() {
    return (
        <div className="flex-container">
            <div className="text-container">
                <h3 className="title">Reverb</h3>
                <p>The main goal of this experiment is to create a reverb algorithm with a size parameter that doesn't
                change the delay time of the reverb structure. This allow to automate or adjust in realtime
                the size of the reverb without making the swish/swoosh sound. </p>
            </div>

            <div className="button-container">
            <MediaPlayer sound={reverbdrums} description={"Hear it on drums."}/>
            <MediaPlayer sound={reverbguitar} description={"Hear it on guitar."}/>
            </div>
        </div>
    );
}

export default Reverb;