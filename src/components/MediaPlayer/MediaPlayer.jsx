import { useState, useRef, useEffect } from "react";
import "./MediaPlayer.css"
import WaveSvg from "../WaveSvg/WaveSvg";
import reverb from "../../assets/audio_files/ReverbGuitar.wav";

export default function MediaPlayer({ sound, title }) {
    const audioRef = useRef(null);
    const titleRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    function handlePlay() {
        if (!audioRef) return;
        audioRef.current.volume = 0.3;
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        const audio = audioRef.current;
        const title = titleRef.current;
        if (!audio || !title) return;

        let animationFrameId;

        const updateProgress = () => {
            const duration = audio.duration || 1;
            const currentTime = audio.currentTime;
            const progressPercentage = (currentTime / duration) * 100;

            title.style.background = `linear-gradient(to right, #ff97fd ${progressPercentage}%, #f0f0f0 ${progressPercentage}%)`;
            title.style.webkitBackgroundClip = "text";
            title.style.backgroundClip = "text";
            title.style.color = "transparent";
            title.style.webkitTextFillColor = "transparent";

            animationFrameId = requestAnimationFrame(updateProgress);
        };

        if (isPlaying) {
            animationFrameId = requestAnimationFrame(updateProgress);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isPlaying]);

    return (
        <div className="button-text-container">
            <button className="player-container" onClick={handlePlay}>
                {isPlaying ? <WaveSvg /> : <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" viewBox="0 0 24 24" fill="#ff97fd" stroke="#ff97fd" ><polygon points="6 3 20 12 6 21 6 3" /></svg>
                }
            </button>
            <p ref={titleRef} className="description">{title}</p>
            <audio ref={audioRef} src={sound ? sound : reverb} onEnded={handlePlay}></audio>
        </div>
    )
}






