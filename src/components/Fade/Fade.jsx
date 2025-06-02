import { AnimatePresence, motion } from "framer-motion";

function Fade({ children, as = "div", className = "", isExiting = false, onExited, ...props }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <AnimatePresence mode="wait" onExitComplete={onExited}>
      {!isExiting && (
        <MotionTag
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          {...props}
        >
          {children}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}

export default Fade;
