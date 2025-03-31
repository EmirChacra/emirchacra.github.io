import { Link } from "react-router";
import './InfoDisplay.css';

function InfoDisplay(item) {


    const showElement = ({ item }) => {
        return (
            <>
                <div className="content-info-display">
                    <h3>{item.title}</h3>
                    {
                        item.text.map((text, index) => {
                            if (text.text_linked === '') {
                                return (
                                    <p key={'text' + index}>{text.text}</p>
                                )
                            } else {
                                return (
                                    <div key={index}>
                                        <p>{text.text} <Link to={text.link}>{text.text_linked}</Link></p>
                                    </div>
                                )
                            }

                        })
                    }
                </div>
                <div>
                    <img src={item.img} alt="cover" />
                </div>
            </>
        )
    }



    return (
        <div className="info-display">
            {showElement(item)}
        </div>
    );
}

export default InfoDisplay;
