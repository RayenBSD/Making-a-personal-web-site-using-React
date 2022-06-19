import "./platforms.css";

import { useState } from "react";

var currentPlace = 0;

const Platforms = () => {

    const info = [
        [require("./images/barmej.jpg"), "https://www.barmej.com/"],
        [require("./images/freeCodeCamp.jpg"), "https://www.freecodecamp.org/"],
        [require("./images/HsoubAcademy.jpg"), "https://academy.hsoub.com/"],
        [require("./images/mimo.png"), "https://getmimo.com/"],
        [require("./images/programmingHero.jpg"), "https://www.programming-hero.com/"],
        [require("./images/saylor.png"), "https://learn.saylor.org/"],
        [require("./images/soloLearn.jpg"), "https://www.sololearn.com/profile/22992971"],
    ];

    const [img, setImg] = useState(info[currentPlace][0]);
    const [imgPrev, setImgPrev] = useState(info[6][0]);
    const [imgNext, setImgNext] = useState(info[1][0]);

    let[link, setLink] = useState(info[currentPlace][1]);
    
    const next = () => {
        if (currentPlace+1 === 7) {
            currentPlace = 0;

            setImg(info[currentPlace][0]);
            setLink(info[currentPlace][1]);

            setImgNext(info[currentPlace+1][0]);
            setImgPrev(info[6][0]);
        }  
        else {
            currentPlace++;

            setImg(info[currentPlace][0]);
            setLink(info[currentPlace][1]);

            if (currentPlace+1 === 7) {
                setImgNext(info[0][0]);
            }
            else {
                setImgNext(info[currentPlace+1][0]);
            }

            if (currentPlace-1 === -1) {
                setImgPrev(info[6][0]);
            }
            else {
                setImgPrev(info[currentPlace-1][0]);
            }
        }
    }
    const prev = () => {
        if (currentPlace-1 === -1) {
            currentPlace = 6;

            setImg(info[currentPlace][0]);
            setLink(info[currentPlace][1]);
            
            setImgNext(info[0][0]);
            setImgPrev(info[currentPlace-1][0]);
        }  
        else {
            currentPlace--;

            setImg(info[currentPlace][0]);
            setLink(info[currentPlace][1]);

            if (currentPlace+1 === 7) {
                setImgNext(info[0][0]);
            }
            else {
                setImgNext(info[currentPlace+1][0]);
            }

            if (currentPlace-1 === -1) {
                setImgPrev(info[6][0]);
            }
            else {
                setImgPrev(info[currentPlace-1][0]);
            }
        }
    }

    return (
        <article id="platforms-pg">
            <section>

                <div className="large fade-in-right">
                    <img src={imgPrev} alt="Platform for learning programming" onClick={prev}/>
                    <button onClick={prev}>Previous</button> 
                </div>

                <div className="fade-down">
                    <a href={link}>
                        <img src={img} alt="Platform for learning programming"/>
                    </a>
                    <div id="small">
                        <button onClick={prev}>Previous</button>
                        <button onClick={next}>Next</button>   
                    </div>
                </div>
                


                <div className="large fade-in-left">
                    <img src={imgNext} alt="Platform for learning programming" onClick={next}/>   
                    <button onClick={next}>Next</button>                 
                </div>
            </section>
        </article>
    );
}

export default Platforms;