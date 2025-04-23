import { useState, useRef, useEffect } from "react";
import "./MediaPlayer.css"
import WaveSvg from "../WaveSvg/WaveSvg";
import reverb from "../../assets/audio_files/ReverbGuitar.wav";

export default function MediaPlayer({ sound, description }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

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
        if (!audio) return;

        let animationFrameId;

        const updateProgress = () => {
            if (!audio.paused) {
                const duration = audio.duration;
                const currentTime = audio.currentTime;
                const progressPercentage = (currentTime / duration) * 100;
                setProgress(progressPercentage);
                animationFrameId = requestAnimationFrame(updateProgress);
            }
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
            <p className={isPlaying ? 'description' : ''} style={{ '--progress-width': `${progress}%` }}>{description}</p>
            <audio ref={audioRef} src={sound ? sound : reverb} onEnded={handlePlay}></audio>
        </div>
    )
}






