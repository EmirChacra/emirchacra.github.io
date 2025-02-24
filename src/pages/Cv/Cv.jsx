import "../../styles/Sectionsv2.css";
import cvpdf from "../../assets/cv.pdf";
import LinkedButton from "../../components/LinkedButton/LinkedButton";
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
        <section className="section-container">
            <h2 className='title'>résumé / CV <LinkedButton link={cvpdf} text="Download pdf" />
            </h2>
            <Collapsible title={"Education"}>
                <Education />
            </Collapsible>
            <Collapsible title={"Education"}>
                <ResearchExperience />
            </Collapsible>
            <Collapsible title={"Education"}>
                <Publications />
            </Collapsible>
            <Collapsible title={"Education"}>
                <TeachingExperience />
            </Collapsible>
            <Collapsible title={"Education"}>
                <AudioEngineering />
            </Collapsible>
            <Collapsible title={"Education"}>
                <Bassist />
            </Collapsible>
            <Collapsible title={"Education"}>
                <Skills />
            </Collapsible>
        </section>
    );
}

export default CV;