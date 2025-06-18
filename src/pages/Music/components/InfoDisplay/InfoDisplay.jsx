import './InfoDisplay.css';
import { AnimatePresence, motion } from "motion/react";

function InfoDisplay(item) {


    const showElement = ({ item }) => {
        return (
            <AnimatePresence mode="wait">
                <motion.div
                key={item.title}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='info-display-container'
                transition={{ duration: 0.3 }} >
                    <div className="info-display">
                        <div className="content-info-display">
                            <h2 className="title">{item.title}</h2>
                            <>{item.description}</>
                        </div>
                        <img className='img' src={item.img} alt="Cover" />
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }



    return (
        <> {showElement(item)} </>
    );
}

export default InfoDisplay;
