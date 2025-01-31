import StandardCard from "../../components/StandardCard/StandardCard";
import Bio from "./components/Bio";
import './Main.css';

function Main() {
    return (
        <div className="main-container">
            <StandardCard />
            <Bio />
        </div>
    );
}

export default Main;