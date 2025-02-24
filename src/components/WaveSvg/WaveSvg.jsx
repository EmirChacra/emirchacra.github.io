import {
    motion,
} from "motion/react"


function WaveSvg() {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill=""
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {[10, 6, 3, 8, 5, 10].map((height, index) => (
                <motion.path

                    key={index}
                    d={`M${index * 4 + 2} ${12 - height / 2}v${height}`}
                    animate={{
                        d: [
                            `M${index * 4 + 2} ${12 - height / 2}v${height}`,
                            `M${index * 4 + 2} ${12 - height / 2 - 3}v${height + 6}`,
                            `M${index * 4 + 2} ${12 - height / 2}v${height}`
                        ]
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: index * 0.1
                    }}
                />
            ))}
        </motion.svg>
    );
}

export default WaveSvg;