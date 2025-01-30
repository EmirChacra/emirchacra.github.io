import CV from "../../Cv/Cv";
import biopic from "/src/assets/biopic.jpg";

function Bio() {
    return ( 
        <div style={{
            width: 500,
            height: 500,
            textAlign: 'justify',
          }}>
            <div style = {{fontSize: "40px"}}>
            <b>BIO</b>
            </div>
            <p>
            I'm Emir Chacra, a music producer, bass player, and audio DSP developer from Chile.
            I'm currently pursuing a Ph.D. in Computer music at University of California, San Diego,
            where I'm doing research on Digital Audio Effects for both VSTs and hardware.
            </p>
            <p>
            As monocromo, my music producer alias, I'm interested in merging latin-inspired rhythms
            with Jazz, Deep House, Shoegaze, and Post-Punk sonorities.
            </p>
            <p>
            I'm also a film photographer :)
            </p>
            <p>
            <CV/>
            </p>

            <img src={biopic} width={500} height={500} alt="Bio Pic" />
        </div>
     );
}

export default Bio;