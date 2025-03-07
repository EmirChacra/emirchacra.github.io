import "./Music.css";

import earlyRiser from "../../assets/earlyRiser_cover.jpg";
import neonatologia from "../../assets/neonatologia_cover.jpg";
import panoramas from "../../assets/panoramas_cover.jpg";
import ambientes from "../../assets/ambientes_cover.jpg";
import { useState } from "react";
import ModalBase from "../../components/ModalBase/ModalBase.JSX";





function Music() {

    const dataEarlyRise = {
        title: "Early Riser",
        subtitle: "(LP, 2023)",
        type: "Self released",
        workers: [
            { data: "Producer, bass player, and mixing engineer", by: "monocromo" },
            { data: "Mastering engineer", by: "monocromo", link: "www.google.com" },
        ],
        links: [{ data: "Bandcamp", link: "www.google.com" }, { data: "Spotify", link: "www.google.com" }],
        image: earlyRiser
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataToShow, setDataToShow] = useState(null);
    const music = [dataEarlyRise];

    const onClickAlbum = (data) => {
        setIsModalOpen(true);
        setDataToShow(data);
    }

    const closeModal = () => setIsModalOpen(false);



    const albums = music.map((data, index) => <img className='musicImages' key={index} src={data.image} onClick={() => onClickAlbum(data)}></img>)

    return (
        <>
            <section className='musicSection'>
                {albums}
            </section>
            {
                isModalOpen &&
                <ModalBase onClose={closeModal} data={dataToShow}>

                </ModalBase>
            }
        </>
    );
}

export default Music;



