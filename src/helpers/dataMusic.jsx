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
      </div>
    )
  },
  {
    img: panoramas,
    title: "Panoramas - monocromo (LP, 2023)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Producer and mixing engineer as <i>monocromo</i>. Bass player as <i>Emir Chacra</i>.</p>
        <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/">Gabo Araya</a></p>
      </div>
    )
  },
  {
    img: ambientes,
    title: "Ambientes - monocromo (EP, 2022)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Producer and mixing engineer as <i>monocromo</i>. Bass player as <i>Emir Chacra</i>.</p>
        <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/">Gabo Araya</a></p>
      </div>
    )
  },
  {
    img: neonatologia,
    title: "Neonatología - Nuevalengua (LP, 2018)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Co-producer and bass player as <i>Emir Chacra</i>. Composition and arrangement - Nuevalengua.</p>
        <p>Recording, mixing, and master engineer - Ricardo Molina</p>
      </div>
    )
  }
];
