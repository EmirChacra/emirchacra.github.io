import LinkedButton from '/src/components/LinkedButton/LinkedButton';
import cover from "/src/assets/ambientes_cover.jpg";
import "/src/components/sections.css";

function Ambientes() {
    return ( 
        <section className="section-container">
            <div className='description-container'>
                <h2 className='title'>Ambientes - monocromo (EP, 2022)</h2>
                <div className="text-container">
                    <p>Self-released.</p>
                    <p>Producer and mixing engineer as <i>monocromo</i>. Bass player as <i>Emir Chacra</i>.</p>
                    <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/" target="_blank">Gabo Araya</a></p>
                </div>  
            </div>
        
            <div className="link-container">
                <LinkedButton link="https://mncrmo.bandcamp.com/album/ambientes" text="Listen on Bandcamp"/>
            </div>
        
            <br></br>
        
            <img className='section-img' src={cover} alt="Cover" />
        </section>
    );
}

export default Ambientes;