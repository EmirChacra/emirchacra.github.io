import { Link } from "react-router";
import earlyRiser from "../../../../assets/album_covers/earlyRiser_cover.jpg";
import './InfoDisplay.css';
import { useState } from "react";

function InfoDisplay() {

    const [element, setElement] = useState(infoExample[0]);

    const showElement = (item) => {
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
            {showElement(element)}
        </div>
    );
}

export default InfoDisplay;

const infoExample = [
    {
        img: earlyRiser,
        title: 'early riser - monocromo (EP, 2024)',
        text: [
            {
                text: 'self-released',
                text_linked: '',
                link: ''
            },
            {
                text: 'Producer and mixing engineer as monocromo.',
                text_linked: '',
                link: ''
            },
            {
                text: 'Master engineer -',
                text_linked: 'Francisco Holzmann',
                link: 'google.com'
            }
        ]

    }
]