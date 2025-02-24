import "../../../styles/Sectionsv2.css";
function Education() {
    return (

        <div className="text-container">
            <ul>
                <li>UC San Diego, Ph.D. in Computer Music (09/23 - Ongoing)</li>
                <li>Universidad de Chile, M.S. in Applied Mathematics (03/21 - 05/22)
                    <ul>
                        <li><b>Grade:</b> 6.8 out of 7.0 (GPA of 4.0). Graduated with honors.</li>
                        <li><b>Dissertation:</b> <a href="https://repositorio.uchile.cl/handle/2250/186006" target="_blank"> "Optimization of the anisotropic elastic properties
                            of a mechanical metamaterial for the design of wooden musical instruments".</a></li>
                        <li><b>Advisor:</b> Axel Osses.</li>
                    </ul>
                </li>
                <li>Universidad de Chile, Mathematical Engineering (03/15 - 05/22)
                    <ul>
                        <li><b>Grade:</b> 7.0 out of 7.0 (GPA of 4.0). Graduated with honors.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Education;