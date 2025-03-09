import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./ModalBase.css";

function ModalBase({ onClose, data }) {
    const modalRoot = document.getElementById("modal-root");
    const el = document.createElement("div");

    useEffect(() => {
        console.log(data);  
        // Agregar el elemento al modal-root
        modalRoot.appendChild(el);

        // Limpiar el elemento cuando el componente se desmonte
        return () => {
            modalRoot.removeChild(el);
        };
    }, [el, modalRoot, data]);

    return ReactDOM.createPortal(
        <div className="modalDisplay">
            <div className="modalContainer">
                <header className="modalHeader">
                    <button onClick={onClose}>X</button>
                </header>
                <div className="modalContent" >
                    <h3>{data.title}</h3>
                </div>
            </div>
        </div>,
        el
    );
}

export default ModalBase;