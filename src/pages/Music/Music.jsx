import earlyRiser from "./components/EarlyRiser";
import Panoramas from "./components/Panoramas";
import Ambientes from "./components/Ambientes";
import Neonatologia from "./components/Neonatologia";
import Footer from "/src/components/footer/footer";

function music() {
    return ( 
        <div>
        <EarlyRiser/>
        <Panoramas/>
        <Ambientes/>
        <Neonatologia/>
        <Footer/>
        </div>
    );
}

export default music;