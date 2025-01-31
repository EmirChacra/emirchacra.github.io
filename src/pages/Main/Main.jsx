import Footer from "../../components/Footer/footer";
import StandardCard from "../../components/StandardCard/StandardCard";
// import Bio from "./components/Bio";
import './Main.css';

function Main() {
    return (
        <div className="main-container">
            <StandardCard  title="Panoramas - mncrmo (LP, 2023)" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" texts={["Self-released", "Producer, bass player, and mixing engeneer as mncrmo", {text: "Master engineer - ", href: "www.google.com", textRef: "Gabo Araya."}]} links={{text: "Listen on bandcamp", href: "www.bandcamp.com"}} />
            {/* <Bio /> */}

            <Footer />
        </div>
    );
}

export default Main;