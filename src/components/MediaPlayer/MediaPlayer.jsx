import { useState, useRef } from "react";
import "./MediaPlayer.css"
import WaveSvg from "../WaveSvg/WaveSvg";
import reverb from "../../assets/audio_files/ReverbGuitar.wav";



export default function MediaPlayer({ sound }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function handlePlay() {
        if (!audioRef) return;
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    }

    return (
        <>
            <button className="player-container" onClick={handlePlay}>
                {isPlaying ? <WaveSvg /> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" ><polygon points="6 3 20 12 6 21 6 3" /></svg>
                }
            </button>
            <audio ref={audioRef} src={sound ? sound : reverb} onEnded={handlePlay}></audio>
        </>
    )

}






