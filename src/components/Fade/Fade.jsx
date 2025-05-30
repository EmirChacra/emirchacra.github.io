import { AnimatePresence, motion} from "motion/react";

function Fade({children}) {
    return (  
    <AnimatePresence mode="wait">
    <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{duration: 1}} >

    {children}
    
    </motion.div>
    </AnimatePresence>
    );
}

export default Fade;