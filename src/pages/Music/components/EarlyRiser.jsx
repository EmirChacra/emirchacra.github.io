import LinkedButton from '../../../components/LinkedButton/LinkedButton';
import cover from "../../../assets/earlyRiser_cover.jpg";
import "../../../styles/Sectionsv2.css";

function EarlyRiser() {
    return ( 
        <section className="section-container">
            <h2 className='title'>early riser - monocromo (EP, 2024)</h2>
            
            <div className="text-container">
                <p>Self-released.</p>
                <p>Producer and mixing engineer as <i>monocromo</i>.</p>
                <p>Master engineer - <a href="https://holzmasters.com" target="_blank">Francisco Holzmann</a></p>
            </div>  
        
            <LinkedButton link="https://mncrmo.bandcamp.com/album/early-riser" text="Listen on Bandcamp"/>
        
            <br></br>
            <br></br>
        
            <img className='img' src={cover} alt="Cover" />
        </section>
    );
}

export default EarlyRiser;