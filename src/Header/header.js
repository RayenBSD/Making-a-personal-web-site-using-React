import "./header.css";

import { useState } from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import Contact from "../Contact/contact.js";
import Services from "../Services/services.js";
import Platforms from "../Platforms/platforms.js";
import Home from "../Home/home.js";
import Skills from "../Skills/skills.js";

const Header = () => {
    
    const [isHidden, setIsHidden] = useState(true);
    //HP == Hide Pop
    const [HP, setHP] = useState("hide");

    const show = () => {
        if (isHidden) {
            setHP("Pop"); 
            setIsHidden(false);
            //console.log(HP);
        }
        else {
            setHP("hide"); 
            setIsHidden(true);
            //console.log(HP);
        } 
    }

    return (
        <BrowserRouter>
            <header id="large">
                <Link to="/" id="home-btn">Rayen</Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <a href="https://github.com/RayenBSD">Projects</a>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/platforms">Platforms</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <header id="small">
                <h1 id="home-btn" onClick={show}>Rayen</h1>
                <nav id={HP}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <a href="https://github.com/RayenBSD">Projects</a>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/platforms">Platforms</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/platforms" element={<Platforms />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/skills" element={<Skills />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Header;