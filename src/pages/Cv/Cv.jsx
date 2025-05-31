import "../../styles/Sectionsv2.css";

import cvpdf from "../../assets/cv.pdf";
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
            <section className="section-container" style={{ padding: "1dvh 15dvh" }}>
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
            </section>
        </>
    );
}

export default CV;