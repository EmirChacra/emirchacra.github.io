import LinkedButton from '../../../components/LinkedButton/LinkedButton';
import cover from "../../../assets/panoramas_cover.jpg";
import "../../../styles/Sectionsv2.css";

function Panoramas() {
    return ( 
        <section className="section-container">
            
            <div className="flex-container">
            <div className="text-container">
                <h2 className='title'>Panoramas - monocromo (LP, 2023)</h2>

                <p>Self-released.</p>
                <p>Producer and mixing engineer as <i>monocromo</i>. Bass player as <i>Emir Chacra</i>.</p>
                <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/" target="_blank">Gabo Araya</a></p>

                <LinkedButton link="https://mncrmo.bandcamp.com/album/panoramas-ambientes-deluxe" text="Listen on Bandcamp"/>
            </div>  
        
            <img className='img' src={cover} alt="Cover" />
            </div>
        </section>
    );
}

export default Panoramas;