import cvpdf from "/src/assets/cv.pdf";

function CV() {
    return ( 
        <div>
        <a href = {cvpdf} target = "_blank">Download CV here.</a>
        </div>
     );
}

export default CV;