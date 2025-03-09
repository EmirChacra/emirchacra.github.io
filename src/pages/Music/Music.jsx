import "./Music.css";

import { useState } from "react";
import ModalBase from "../../components/ModalBase/ModalBase.JSX";
import { dataAmbientes, dataEarlyRise, dataNeonatologia, dataPanoramas } from "./helpers/data";





function Music() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dataToShow, setDataToShow] = useState(null);
    const music = [dataEarlyRise, dataNeonatologia, dataPanoramas, dataAmbientes];

    const onClickAlbum = (data) => {
        setIsModalOpen(true);
        setDataToShow(data);
    }

    const closeModal = () => setIsModalOpen(false);



    const albums = music.map((data, index) => <img className='musicImages' key={index} src={data.image} onClick={() => onClickAlbum(data)}></img>)

    return (
        <>
            <section className='musicSection'>
                <h2 className="title">Music</h2>
                <div className="albums">
                    {albums}
                </div>
            </section>
            {
                isModalOpen &&
                <ModalBase onClose={closeModal} data={dataToShow}></ModalBase>
            }
        </>
    );
}

export default Music;



