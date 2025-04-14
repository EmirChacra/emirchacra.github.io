import { Link } from "react-router";
import './InfoDisplay.css';

function InfoDisplay(item) {


    const showElement = ({ item }) => {
        return (
            <div className="info-display">
                <div className="content-info-display">
                    <h2 className="title">{item.title}</h2>
                    <>{item.description}</>
                </div>
                <img className='img' src={item.img} alt="Cover" />
            </div>
        )
    }



    return (
        <> {showElement(item)} </>
    );
}

export default InfoDisplay;
