import "./skills.css";

const Skills = () => {

    let languages = require("./images/languages.png");
    let web = require("./images/web.png");
    let front_end = require("./images/Front-End.png");
    let data_base = require("./images/Data-Base.png");
    let back_end = require("./images/back-end.png"); 

    return (
        <article id="skills-pg">
            <h2 className="fade-down">Skills</h2>
            <section id="languages" className="skill-desc-white">
                <img src={languages} alt="Languages" className="fade-in-right"/>
                <ul className="fade-in-left">
                    <h3>Languages</h3>
                    <li>
                        <p>Python</p>
                    </li>
                    <li>
                        <p>C++</p>
                    </li>
                    <li>
                        <p>C</p>
                    </li>
                    <li>
                        <p>Java</p>
                    </li>
                    <li>
                        <p>NodeJS</p>
                    </li>
                    <li>
                        <p>PHP</p>
                    </li>
                </ul>
            </section>
            <section id="web" className="skill-desc-black">
                <img src={web} alt="Web Languages" className="fade-in-right"/>
                <ul className="fade-in-left">
                    <h3>Web</h3>
                    <li>
                        <p>HTML</p>
                    </li>
                    <li>
                        <p>CSS</p>
                    </li>
                    <li>
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <p>jQuery</p>
                    </li>
                </ul>
            </section>
            <section id="front-end" className="skill-desc-white">
                <img src={front_end} alt="Front-End Libraries" className="fade-in-right"/>
                <ul className="fade-in-left">
                    <h3>Front-End</h3>
                    <li>
                        <p>React</p>
                    </li>
                    <li>
                        <p>Angular</p>
                    </li>
                    <li>
                        <p>Svelte</p>
                    </li>
                    <li>
                        <p>Vue</p>
                    </li>
                </ul>
            </section>
            <section id="data-base" className="skill-desc-black">
                <img src={data_base} alt="Data Bases" className="fade-in-right"/>
                <ul className="fade-in-left">
                    <h3>Data Base</h3>
                    <li>
                        <p>MySQL</p>
                    </li>
                    <li>
                        <p>mongoDB</p>
                    </li>
                    <li>
                        <p>PostgreSQL</p>
                    </li>
                </ul>
            </section>
            <section id="back-end" className="skill-desc-white">
                <img src={back_end} alt="Back-End" className="fade-in-right"/>
                <ul className="fade-in-left">
                    <h3>Back-End</h3>
                    <li>
                        <p>Redux</p>
                    </li>
                    <li>
                        <p>Nest</p>
                    </li>
                    <li>
                        <p>Next</p>
                    </li>
                    <li>
                        <p>Express</p>
                    </li>
                    <li>
                        <p>Laravel</p>
                    </li>
                </ul>
            </section>
        </article>
    );
}

export default Skills;