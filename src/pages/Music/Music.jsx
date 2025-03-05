import "./Music.css";

import earlyRiser from "../../assets/earlyRiser_cover.jpg";
import neonatologia from "../../assets/neonatologia_cover.jpg";
import panoramas from "../../assets/panoramas_cover.jpg";
import ambientes from "../../assets/ambientes_cover.jpg";

const backgroundImages = [earlyRiser, neonatologia, panoramas, ambientes];


function Music() {
    
    const images = backgroundImages.map( (image, index) =>  <img className='musicImages' key={index} src={image} ></img> )

    return ( 
        <section className='musicSection'>
           {images}
        </section>
    );
}

export default Music;