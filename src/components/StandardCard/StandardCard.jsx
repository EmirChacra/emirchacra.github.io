import LinkedButton from '../LinkedButton/LinkedButton';
import './StandardCard.css';


function StandardCard(props) {
    const { img = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", title = "Sin titulo", texts = ["sin texto"], links } = props;

    const textSchema = texts.map((text, index) => {
        if (typeof text === "string") {
            return <p key={index}>{text}</p>
        } else {
            return <p key={index}>{text.text}<a href={text.href}>{text.textRef}</a></p>
        }
    })

    return (
        <section className='section-container'>
            <img className='section-img' src={img} alt="img" />
            <div className='description-container'>
                <h2 className='title'>{title}</h2>
                <div className='text-container'>
                    {textSchema}
                </div>
                {
                    links ? <div className='links-container'>
                        <LinkedButton text={links.text} href={links.href} />
                    </div> : null
                }

            </div>
        </section>
    );
}

export default StandardCard;