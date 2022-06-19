import "./home.css";

const Home = () => {

    return (
        <article id="home-pg">
            <section className="fade-in-right">
               <h1>I'm Rayen</h1> 
            </section>
            <section id="desc" className="show">
                <p>
                    My name is Rayen Boussayed Mohammed El Amin from Algeria, born in    18 May 2004.
                    I <span>study Computer Science</span> in Abou Bekr Belkaid university - Tlemcen. I'm a <span>Full-Stack developer</span> and
                    a <span>Game developer</span>. I'm also a content creator on <a href="https://www.tiktok.com/@rynbsd?lang=en">Tiktok</a> and <a href="https://www.youtube.com/channel/UCgBHZLwwRAnvcUmbNsNHUuA">Youtube</a>.

                </p>
            </section>
        </article>
    );
}

export default Home;