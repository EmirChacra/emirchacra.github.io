import { useState } from "react";
import "./MediaPlayer.css"
import WaveSvg from "../WaveSvg/WaveSvg";



export default function MediaPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);

    function handlePlay() {
        setIsPlaying(!isPlaying);
    }

    return (
        <button className="player-container" onClick={handlePlay}>
            <source src="audio.mp3" type="audio/mpeg" />
            {isPlaying ? <WaveSvg /> : <div/>}
        </button>
    )

}




