import StandardCard from "../../components/StandardCard/StandardCard";
import Bio from "./components/Bio";
import ReleaseHighlight from "./components/ReleaseHighlight";
import './Main.css';

function Main() {
    return (
        <section className="main-container">
            <Bio/>
            <ReleaseHighlight/>
            <br />
        </section>
    );
}

export default Main;