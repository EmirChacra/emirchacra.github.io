import earlyRiser from "../assets/album_covers/earlyRiser_cover.jpg";
import ambientes from "../assets/album_covers/ambientes_cover.jpg";
import neonatologia from "../assets/album_covers/neonatologia_cover.jpg";
import panoramas from "../assets/album_covers/panoramas_cover.jpg";

export const dataMusic = [
  {
    img: earlyRiser,
    title: "early riser - monocromo (EP, 2024)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Producer and mixing engineer as <i>monocromo</i>.</p>
        <p>Master engineer - <a href="https://holzmasters.com">Francisco Holzmann</a></p>
        <a className="button-container" 
          href="https://mncrmo.bandcamp.com/album/early-riser">
          Listen on Bandcamp
        </a> 
      </div>
    )
  },
  {
    img: panoramas,
    title: "panoramas - monocromo (LP, 2023)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Producer and mixing engineer as <i>monocromo</i>.</p>
        <p> Bass player as <i>Emir Chacra</i></p>
        <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/">Gabo Araya</a></p>
        <a className="button-container"
          href="https://mncrmo.bandcamp.com/album/panoramas-ambientes-deluxe">
          Listen on Bandcamp
        </a> 
      </div>
    )
  },
  {
    img: ambientes,
    title: "ambientes - monocromo (EP, 2022)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Producer and mixing engineer as <i>monocromo</i>.</p>
        <p> Bass player as <i>Emir Chacra</i></p>
        <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/">Gabo Araya</a></p>
        <a className="button-container"
          href="https://mncrmo.bandcamp.com/album/ambientes">
          Listen on Bandcamp
        </a>
      </div>
    )
  },
  {
    img: neonatologia,
    title: "neonatología - nuevalengua (LP, 2018)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Co-producer and bass player as <i>Emir Chacra</i>.</p>
        <p>Composition and arrangement - Nuevalengua.</p>
        <p>Recording, mixing, and master engineer - Ricardo Molina</p>
        <a className="button-container"
          href="https://youtube.com/playlist?list=OLAK5uy_lDi19sDPeX_Orke-Tv5-JaA_tmNalu26A&si=nV4N6ZMAXaIV5cN4">
          Listen on Youtube
        </a> 
      </div>
    )
  }
];
