import LinkedButton from '../../../components/LinkedButton/LinkedButton';
import cover from "../../../assets/neonatologia_cover.jpg";
import "../../../styles/Sectionsv2.css";

function Neonatologia() {
    return ( 
        <section className="section-container">
            <h2 className='title'>Neonatología - Nuevalengua (LP, 2018)</h2>

            <div className="text-container">
                <p>Self-released.</p>
                <p>Co-producer and Bass player as <i>Emir Chacra</i>.</p>
                <p>Composition and arrangement - Nuevalengua.</p>
                <p>Recording, mixing, and master engineer - Ricardo Molina</p>
            </div>  
        
            <LinkedButton link="https://open.spotify.com/album/7jekM7K0roSUXjj3njw3Yi?si=gJRbteo0Q5em1-h2GiqLNw" text="Listen on Spotify"/>
        
            <br></br>
            <br></br>
        
            <img className='img' src={cover} alt="Cover" />
        </section>
    );
}

export default Neonatologia;