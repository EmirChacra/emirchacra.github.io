import "../../styles/Sectionsv2.css";
import LinkedButton from '../../components/LinkedButton/LinkedButton';
import cvpdf from "../../assets/cv.pdf";
import biopic from "../../assets/biopic.jpg";

function AboutMe() {
    return ( 
        <section className="section-container">
            <h2 className='title'>about me</h2>
            
            <div className="text-container">
                <p>I'm Emir Chacra, a music producer, bass player, and audio DSP developer from Chile.
                I'm currently pursuing a Ph.D. in Computer music at University of California, San Diego,
                where I'm doing research on Digital Audio Effects for both VSTs and hardware.</p>
                <p>As monocromo, my music producer alias, I'm interested in merging latin-inspired rhythms
                with Jazz, Deep House, Shoegaze, and Post-Punk sonorities.</p>
                <p>I'm also a film photographer :)</p>
            </div>  
    
            <LinkedButton link={cvpdf} text="Download CV"/>
    
            <br></br>
            <br></br>
    
            <img className='img' src={biopic} alt="Bio Pic" />
        </section>
     );
}

export default AboutMe;