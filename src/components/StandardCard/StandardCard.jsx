import LinkedButton from '../LinkedButton/LinkedButton';
import './StandardCard.css';


function StandardCard() {
    // const { img , title, links} = props;

    return (
        <section className='section-container'>
            <img className='section-img' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="img" />
            <div className='description-container'>
                <h1 className='title'>Panoramas - mncrmo (LP, 2023)</h1>
                <div className='text-container'>
                    <p>Self-realesed</p>
                    <p>Producer, bass player, and mixing engineer as mncrmo</p>
                    <p>Master engineer - <a href="#">Gabo Araya</a></p>
                </div>

                <div className='links-container'>
                    <LinkedButton text="Listen on bandcamp" />
                </div>
            </div>
        </section>
    );
}

export default StandardCard;