import StandardCard from "../../components/StandardCard/StandardCard";
import Footer from "../../components/Footer/Footer";

import Bio from "./components/Bio";
import ReleaseHighlight from "./components/ReleaseHighlight";
import './Main.css';
import Home from "../Home/Home";

function Main() {
    return (
        <section style={{paddingLeft: '5px', paddingRight: '5px'}}>
            <Home/>
            <Bio/>
            <ReleaseHighlight/>
            <StandardCard></StandardCard>
            <Footer/>
        </section>
    );
}

export default Main;