import LinkedButton from "../../components/LinkedButton/LinkedButton";
import "../../styles/Sectionsv2.css";
import cvpdf from "../../assets/cv.pdf";
import biopic from "../../assets/biopic.jpg";
import Fade from "../../components/Fade/Fade";

function AboutMe() {
  return (
    <Fade as="section" className="section-container">
      <div className="flex-container">
        <div className="text-container">
          <p>
            I'm Emir Chacra, a music producer, bass player, and audio DSP
            developer from Chile. I'm currently pursuing a Ph.D. in Computer
            music at University of California, San Diego, where I'm doing
            research on Digital Audio Effects for both VSTs and hardware.
          </p>
          <p>
            As monocromo, mi music producer alias, I'm interested in merging
            latin-inspired rhythms with Jazz, Deep House, Shoegaze, and
            Post-Punk sonorities.
          </p>
          <p>I'm also a film photographer :)</p>
          <LinkedButton link={cvpdf} text="Download CV" />
          <br />
          <br />
          {/* Ejemplo de navegación animada: */}
        </div>
        <img className="img" src={biopic} alt="Bio Pic" />
      </div>
    </Fade>
  );
}

export default AboutMe;
