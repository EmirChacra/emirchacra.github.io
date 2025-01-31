import LinkedButton from '/src/components/LinkedButton/LinkedButton';
import cover from "/src/assets/neonatologia_cover.jpg";
import "/src/components/sections.css";

function Neonatologia() {
    return ( 
        <section className="section-container">
            <div className='description-container'>
                <h2 className='title'>Neonatología - Nuevalengua (LP, 2018)</h2>
                <div className="text-container">
                    <p>Self-released.</p>
                    <p>Co-producer and Bass player as <i>Emir Chacra</i>.</p>
                    <p>Composition and arrangement - Nuevalengua.</p>
                    <p>Recording, mixing, and master engineer - Ricardo Molina</p>
                </div>  
            </div>
        
            <div className="link-container">
                <LinkedButton link="https://open.spotify.com/album/7jekM7K0roSUXjj3njw3Yi?si=gJRbteo0Q5em1-h2GiqLNw" text="Listen on Spotify"/>
            </div>
        
            <br></br>
        
            <img className='section-img' src={cover} alt="Cover" />
        </section>
    );
}

export default Neonatologia;