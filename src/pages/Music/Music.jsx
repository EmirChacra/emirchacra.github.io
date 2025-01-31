import earlyRiser from "./components/earlyRiser";
import Panoramas from "./components/Panoramas";
import Ambientes from "./components/ambientes";
import Neonatologia from "./components/neonatologia";
import Footer from "/src/components/footer/footer";

function music() {
    return ( 
        <div>
        <earlyRiser/>
        <Panoramas/>
        <Ambientes/>
        <Neonatologia/>
        <Footer/>
        </div>
    );
}

export default music;