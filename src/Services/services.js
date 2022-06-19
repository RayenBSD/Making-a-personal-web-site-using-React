import "./services.css";

const Services = () => {

    return (
        <article id="services-pg">
            <section id="static-srv">
                <h1 className="fade-down">Static Web page</h1>
                <div id="static-desc" className="show">
                    <ul>
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
                    <h2>Or</h2>
                    <ul>
                        <li>
                            <p>React</p>
                        </li>
                        <li>
                            <p>Angular</p>
                        </li>
                        <li>
                            <p>Vue</p>
                        </li>
                        <li>
                            <p>Svelte</p>
                        </li>
                    </ul>
                    <p>
                        A static Web site is made usually with <span>HTML</span> and <span>CSS</span> and <span>JavaScript Or jQuery</span>
                    </p>
                    <p></p>
                    <p>
                        But some times the <span>best</span> choice is using <span>one</span> of these <span>Libraries</span>    
                    </p>  
                </div>
            </section>
            <section id="full-web-app-srv">
                <h1 className="fade-down">Dynamic Web page</h1>
                <div id="full-web-app-desc" className="show">
                    <ul>
                        <li>
                            <p>React</p>
                        </li>
                        <li>
                            <p>Angular</p>
                        </li>
                        <li>
                            <p>Vue</p>
                        </li>
                        <li>
                        <p>Svelte</p>
                        </li>
                    </ul>
                    <h2>+</h2>
                    <ul>
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
                    </ul>
                    <h2>+</h2>
                    <ul>
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
                    <p>To make a <span>Dynamic</span> web page we start by choosing <span>one</span> of these <span>Libraries</span></p>
                    <p></p>
                    <p>Then we choose <span>one</span> of these <span>Frame-works</span></p>
                    <p></p>
                    <p>Then we pick <span>one</span> of these <span>Data-Bases</span></p>
                </div>
            </section>
        </article>
    );
}

export default Services;