import { motion } from 'framer-motion';
import Reverb from "./components/Reverb";

function AudioDSP() {
    return (
        <motion.section
            className="section-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
            <Reverb />
            <Reverb />
        </motion.section>
    );
}

export default AudioDSP;