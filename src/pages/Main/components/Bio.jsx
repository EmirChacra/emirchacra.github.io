import LinkedButton from '/src/components/LinkedButton/LinkedButton';
import biopic from "/src/assets/biopic.jpg";
import cvpdf from "/src/assets/cv.pdf";
import "/src/components/sections.css";

function Bio() {
    return ( 
        <section className="section-container">
            <div className='description-container'>
                <h2 className='title'>about me</h2>
                <div className="text-container">
                    <p>I'm Emir Chacra, a music producer, bass player, and audio DSP developer from Chile.
                    I'm currently pursuing a Ph.D. in Computer music at University of California, San Diego,
                    where I'm doing research on Digital Audio Effects for both VSTs and hardware.</p>
                    <p>As monocromo, my music producer alias, I'm interested in merging latin-inspired rhythms
                    with Jazz, Deep House, Shoegaze, and Post-Punk sonorities.</p>
                    <p>I'm also a film photographer :)</p>
                </div>  
            </div>

            <div className="link-container">
                <LinkedButton link={cvpdf} text="Download CV here"/>
            </div>

            <br></br>

            <img className='section-img' src={biopic} alt="Bio Pic" />
        </section>
     );
}

export default Bio;