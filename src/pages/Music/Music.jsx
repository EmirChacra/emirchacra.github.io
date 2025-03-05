import "./Music.css";

import earlyRiser from "../../assets/earlyRiser_cover.jpg";
import neonatologia from "../../assets/neonatologia_cover.jpg";
import panoramas from "../../assets/panoramas_cover.jpg";
import ambientes from "../../assets/ambientes_cover.jpg";
import { useState } from "react";
import ModalBase from "../../components/ModalBase/ModalBase.JSX";


const backgroundImages = [earlyRiser, neonatologia, panoramas, ambientes];


function Music() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const images = backgroundImages.map((image, index) => <img className='musicImages' key={index} src={image} onClick={openModal}></img>)

    return (
        <>
            <section className='musicSection'>
                {images}
            </section>
            {
                isModalOpen &&
                <ModalBase onClose={closeModal}>

                </ModalBase>
            }
        </>
    );
}

export default Music;