import StandardCard from "../../components/StandardCard/StandardCard";
import Footer from "../../components/Footer/Footer";

import Bio from "./components/Bio";
import ReleaseHighlight from "./components/ReleaseHighlight";
import './Main.css';

function Main() {
    return (
        <section>
            <Bio/>
            <ReleaseHighlight/>
            <StandardCard></StandardCard>
            <Footer/>
        </section>
    );
}

export default Main;