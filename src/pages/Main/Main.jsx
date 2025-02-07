import Footer from '../../components/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import CV from '../Cv/Cv';
import Music from '../Music/Music';
import './Main.css';
import Home from "../Home/Home";

function Main() {
    return (
        <>
            <Home />
            <section style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                <Bio />
                <ReleaseHighlight />
                <StandardCard></StandardCard>
                <Footer />
            </section>
        </>
    );
}

export default Main;