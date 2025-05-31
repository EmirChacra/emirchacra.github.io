import { motion } from 'framer-motion';
import "../../styles/Sectionsv2.css";
// import cvpdf from "../../assets/cv.pdf";
import Education from "./components/Education";
import ResearchExperience from "./components/ResearchExperience";
import Publications from "./components/Publications";
import TeachingExperience from "./components/TeachingExperience";
import AudioEngineering from "./components/AudioEngineering";
import Bassist from "./components/Bassist";
import Skills from "./components/Skills";
import Collapsible from "../../components/Collapsible/Collapsible";

function CV() {
    return (
        <>
            <motion.section
                className="section-container"
                style={{ padding: "1dvh 15dvh" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
                <Collapsible title={"Education"}>
                    <Education />
                </Collapsible>
                <Collapsible title={"Research experience"}>
                    <ResearchExperience />
                </Collapsible>
                <Collapsible title={"Publications"}>
                    <Publications />
                </Collapsible>
                <Collapsible title={"Teaching experience"}>
                    <TeachingExperience />
                </Collapsible>
                <Collapsible title={"Audio Engineering"}>
                    <AudioEngineering />
                </Collapsible>
                <Collapsible title={"Bassist"}>
                    <Bassist />
                </Collapsible>
                <Collapsible title={"Skills"}>
                    <Skills />
                </Collapsible>
            </motion.section>
        </>
    );
}

export default CV;