import LinkedButton from '../../../components/LinkedButton/LinkedButton';
import cover from "../../../assets/ambientes_cover.jpg";
import "../../../styles/Sectionsv2.css";

function Ambientes() {
    return ( 
        <section className="section-container">
            <h2 className='title'>Ambientes - monocromo (EP, 2022)</h2>

            <div className="text-container">
                <p>Self-released.</p>
                <p>Producer and mixing engineer as <i>monocromo</i>. Bass player as <i>Emir Chacra</i>.</p>
                <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/" target="_blank">Gabo Araya</a></p>
            </div>  
        
            <LinkedButton link="https://mncrmo.bandcamp.com/album/ambientes" text="Listen on Bandcamp"/>
        
            <br></br>
            <br></br>
        
            <img className='img' src={cover} alt="Cover" />
        </section>
    );
}

export default Ambientes;