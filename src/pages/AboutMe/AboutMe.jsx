import LinkedButton from '../../components/LinkedButton/LinkedButton';
import "../../styles/Background.css";
import "../../styles/Sectionsv2.css";
import cvpdf from "../../assets/cv.pdf";
import biopic from "../../assets/biopic.jpg";

function AboutMe() {
    return (
        <section className="section-container">
            <div className="flex-container">
                <div className="text-container">

                    <p>I'm Emir Chacra, a music producer, bass player, and audio DSP developer from Chile.
                        I'm currently pursuing a Ph.D. in Computer music at University of California, San Diego,
                        where I'm doing research on Digital Audio Effects for both VSTs and hardware.</p>
                    <p>As monocromo, my music producer alias, I'm interested in merging latin-inspired rhythms
                        with Jazz, Deep House, Shoegaze, and Post-Punk sonorities.</p>
                    <p>I'm also a film photographer :)</p>

                    <LinkedButton link={cvpdf} text="Download CV" />
                    <br />
                    <br />
                </div>

                <img className='img' src={biopic} alt="Bio Pic" />
            </div>
        </section>
    );
}

export default AboutMe;