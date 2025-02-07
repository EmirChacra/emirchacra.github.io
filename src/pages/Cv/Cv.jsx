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

function CV() {
    return ( 
        <section className="section-container">
            <h2 className='title'>résumé / CV <LinkedButton link={cvpdf} text="Download pdf"/>
            </h2>

            <Education/>
            <ResearchExperience/>
            <Publications/>
            <TeachingExperience/>
            <AudioEngineering/>
            <Bassist/>
            <Skills/>
        </section>
    );
}

export default CV;