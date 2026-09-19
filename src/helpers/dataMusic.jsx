import latir from "../assets/album_covers/latir_cover.jpg";
import perdidos from "../assets/album_covers/perdidos_cover.jpg";
import earlyRiser from "../assets/album_covers/earlyRiser_cover.jpg";
import ambientes from "../assets/album_covers/ambientes_cover.jpg";
import neonatologia from "../assets/album_covers/neonatologia_cover.jpg";
import panoramas from "../assets/album_covers/panoramas_cover.jpg";

export const dataMusic = [
  {
    img: latir,
    title: "Cedrón - monocromo (Single, 2026)",
    description: (
      <div className="text-container">
        <p>Released through Joya x Muakk x Aliens </p>
        <p>Part of a benefit compilation to support earthquake relief efforts in Colombia</p>
        <p>Producer, mixing and mastering engineer as <i>monocromo</i>.</p>
        <iframe style={{border: 0, width: "100%", height: "42px"}} 
        src="https://bandcamp.com/EmbeddedPlayer/album=4068708280/size=small/bgcol=333333/linkcol=ff97fd/artwork=none/track=4153014090/transparent=true/" seamless>
          <a href="https://joyita.bandcamp.com/album/latir">
          Cedrón by monocromo via LATIR</a>
          </iframe>
      </div>
    )
  },  
  {
    img: perdidos,
    title: "Perdidos - monocromo (EP, 2026)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Lost tracks rescued from early demos.</p>
        <p>Producer and mastering engineer as <i>monocromo</i>.</p>
        <iframe style={{border: 0, width: "100%", height: "42px"}} 
        src="https://bandcamp.com/EmbeddedPlayer/album=1638565834/size=small/bgcol=333333/linkcol=ff97fd/artwork=none/transparent=true/" seamless>
          <a href="https://mncrmo.bandcamp.com/album/perdidos">
          Perdidos by monocromo
          </a>
        </iframe>
      </div>
    )
  },  
  {
    img: earlyRiser,
    title: "early riser - monocromo (EP, 2024)",
    description: (
      <div className="text-container">
        <p>Self-released.</p>
        <p>Producer and mixing engineer as <i>monocromo</i>.</p>
        <p>Master engineer - <a href="https://holzmasters.com">Francisco Holzmann</a></p>
        <iframe style= {{border: 0, width: "100%", height: "42px"}}
        src="https://bandcamp.com/EmbeddedPlayer/album=990244918/size=small/bgcol=333333/linkcol=ff97fd/artwork=none/transparent=true/" seamless>
          <a href="https://mncrmo.bandcamp.com/album/early-riser">
          early riser by monocromo
          </a>
        </iframe>
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
        <p>Bass player as <i>Emir Chacra</i></p>
        <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/">Gabo Araya</a></p>
        <iframe style={{border: 0, width: "100%", height: "42px"}}
        src="https://bandcamp.com/EmbeddedPlayer/album=3265618316/size=small/bgcol=333333/linkcol=ff97fd/artwork=none/transparent=true/" seamless>
          <a href="https://mncrmo.bandcamp.com/album/panoramas-ambientes-deluxe">
            Panoramas (Ambientes Deluxe) by monocromo
          </a>
        </iframe>
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
        <p>Bass player as <i>Emir Chacra</i></p>
        <p>Master engineer - <a href="https://www.instagram.com/elgaboaraya/">Gabo Araya</a></p>
        <iframe style={{border: 0, width: "100%", height: "42px"}} 
        src="https://bandcamp.com/EmbeddedPlayer/album=3365080940/size=small/bgcol=333333/linkcol=ff97fd/artwork=none/transparent=true/" seamless>
          <a href="https://mncrmo.bandcamp.com/album/ambientes">
            Ambientes by monocromo
          </a>
        </iframe>
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
