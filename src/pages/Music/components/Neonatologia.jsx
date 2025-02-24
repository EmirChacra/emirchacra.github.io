import LinkedButton from '../../../components/LinkedButton/LinkedButton';
import cover from "../../../assets/neonatologia_cover.jpg";
import "../../../styles/Sectionsv2.css";

function Neonatologia() {
    return ( 
        <section className="section-container">
            
            <div className="flex-container">
            <div className="text-container">
                <h2 className='title'>Neonatología - Nuevalengua (LP, 2018)</h2>

                <p>Self-released.</p>
                <p>Co-producer and Bass player as <i>Emir Chacra</i>.</p>
                <p>Composition and arrangement - Nuevalengua.</p>
                <p>Recording, mixing, and master engineer - Ricardo Molina</p>

                <LinkedButton link="https://open.spotify.com/album/7jekM7K0roSUXjj3njw3Yi?si=gJRbteo0Q5em1-h2GiqLNw" text="Listen on Spotify"/>
            </div>  
        
            <img className='img' src={cover} alt="Cover" />
            </div>
        </section>
    );
}

export default Neonatologia;