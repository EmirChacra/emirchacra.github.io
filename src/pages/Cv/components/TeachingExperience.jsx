import "../../../styles/Sectionsv2.css";

function TeachingExperience() {
    return ( 
        <section className="section-container">
            <h3 className='subtitle'>teaching experience</h3>

            <div className="text-container">
                <h4>As an instructor</h4>
                    <ul>
                        <li>UCSD/MCASD Audio Workshops: Beatmaking. Summer 2024.</li>
                    </ul>

                <h4>As a teaching assistant</h4>
                    <ul>
                        <li><b>UC San Diego:</b>
                            <ul>
                                <li>MUS 172: Computer Music II. Spring 2024 (1 quarter).</li>
                                <li>MUS 171: Computer Music I. Fall 2023, Winter 2025 (2 quarters).</li>
                                <li>MUS 170: Art of Sound. Fall 2024 (1 quarter).</li>
                                <li>MUS 17: Hip Hop. Winter 2024 (1 quarter)</li>
                            </ul>
                        </li>
                        <li><b>Universidad de Chile:</b>
                            <ul>
                                <li>Probability and Statistics. Fall 2020, Fall 2022, Spring 2022 (3 terms).</li>
                                <li>Numerical analysis of partial differential equations. Fall 2021, Fall 2022 (2 terms).</li>
                                <li>Probability and Statistics in Data Analysis. Fall 2019 (1 term).</li>
                                <li>Statistics. Spring 2018 (1 term).</li>
                            </ul>
                        </li>
                    </ul>

                <h4>As a guest speaker</h4>
                    <ul>
                        <li>Talk and workshop: <i>What should I do to start designing software or hardware digital audio effects?</i>. Sound Department, Universidad de Chile (Dec 2024).</li>
                    </ul>
            </div>
        </section>
    );
}

export default TeachingExperience;