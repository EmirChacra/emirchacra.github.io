import StandardCard from "../../components/StandardCard/StandardCard";
import Footer from "/src/components/footer/footer";
import Bio from "./components/Bio";
import ReleaseHighlight from "./components/ReleaseHighlight";
import './Main.css';

function Main() {
    return (
        <section className="main-container">
            <Bio/>
            <ReleaseHighlight/>
            <Footer/>
        </section>
    );
}

export default Main;