import LinkedButton from '/src/components/LinkedButton/LinkedButton';
import cover from "/src/assets/earlyRiser_cover.jpg";
import "/src/components/sections.css";

function EarlyRiser() {
    return ( 
        <section className="section-container">
            <div className='description-container'>
                <h2 className='title'>early riser - monocromo (EP, 2024)</h2>
                <div className="text-container">
                    <p>Self-released.</p>
                    <p>Producer and mixing engineer as <i>monocromo</i>.</p>
                    <p>Master engineer - <a href="https://holzmasters.com" target="_blank">Francisco Holzmann</a></p>
                </div>  
            </div>
        
            <div className="link-container">
                <LinkedButton link="https://mncrmo.bandcamp.com/album/early-riser" text="Listen on Bandcamp"/>
            </div>
        
            <br></br>
        
            <img className='section-img' src={cover} alt="Cover" />
        </section>
    );
}

export default EarlyRiser;