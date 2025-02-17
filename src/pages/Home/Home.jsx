import { useEffect, useState } from 'react';
import './Home.css';
// import logo from "../../assets/panoramas_cover.jpg";

function Home() {

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const initialTags = [
        { text: "about me", href: "#about", width: 75, height: 18 },
        { text: "photos", href: "#photos",  width: 75, height: 18  },
        { text: "music", href: "#music",  width: 75, height: 18  },
        { text: "cv", href: "#music", width: 75, height: 18 },
        { text: "audio dsp", href: "#music", width: 75, height: 18  },
    ];

    const speed = -0.1;
    const generateRandomDirection = () => (Math.random() > 0.5 ? Math.abs(speed) : speed);

    const [tags, setTags] = useState(
        initialTags.map((tag) => ({
            ...tag,
            left: Math.random() * (window.innerWidth - 150),
            top: Math.random() * (window.innerHeight - 50),
            dx: generateRandomDirection(),
            dy: generateRandomDirection(),
        }))
    );

    useEffect(() => {

        let animationFrameId;

        const moveTags = () => {
            setTags((prevTags) =>
                prevTags.map((tag) => {
                    let newLeft = tag.left + tag.dx;
                    let newTop = tag.top + tag.dy;
                    let newDx = tag.dx;
                    let newDy = tag.dy;

                    // Obtiene el tamaño real del elemento
                    const tagElement = document.getElementById(`tag-${tag.text}`);
                    const width = tagElement ? tagElement.offsetWidth : tag.width;
                    const height = tagElement ? tagElement.offsetHeight : tag.height;

                    // Rebote en bordes
                    if (newLeft <= 0 || newLeft + width >= containerWidth) newDx *= -1;
                    if (newTop <= 0 || newTop + height >= containerHeight) newDy *= -1;
                    
                    return { ...tag, left: newLeft, top: newTop, dx: newDx, dy: newDy, width, height };
                })
            );

            animationFrameId = requestAnimationFrame(moveTags);
        };

        animationFrameId = requestAnimationFrame(moveTags);

        return () => cancelAnimationFrame(animationFrameId);
    }, [containerWidth, containerHeight]);

    return (
        <div className="landing-container">
            <img
                src="https://images.unsplash.com/photo-1541422348463-9bc715520974?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Background"
                className="background-image"
            />
            <h1 className='landing-title'>emir chacra</h1>
            {tags.map((tag, index) => (
                <a
                    key={index}
                    href={tag.href}
                    id={`tag-${tag.text}`}
                    className="tag"
                    style={{ top: tag.top, left: tag.left }}
                >
                    {tag.text}
                </a>
            ))}
        </div>
    );
}

export default Home;