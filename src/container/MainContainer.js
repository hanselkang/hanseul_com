import React, { useState } from "react";
import MainDrawing from "../components/MainDrawing"
import linkedin from "../components/src/icons/linkedin.png"
import github from "../components/src/icons/github.png"
import twitter from "../components/src/icons/twitter.png"
import instagram from "../components/src/icons/instagram.png"
import youtube from "../components/src/icons/youtube.png"

const MainContainer = () => {




    const programming = <h1> </h1>
    const main = <h1></h1>
    const photograph = <h3></h3>
    const other = <h3> </h3>
    const email = <h3> </h3>



    const [selectedAct, setSelectedAct] = useState(main)

    const handleMenu = (event) => {
        console.log(event.target)
        if (event.target.innerText === "Photograph") {
            setSelectedAct(photograph);
        } else if (event.target.innerText === "Prgoramming") {
            setSelectedAct(programming);
        } else if (event.target.innerText === "Paint & Previous") {
            setSelectedAct(other);
        } else if (event.target.innerText === "email") {
            setSelectedAct(email);
        } else {
            setSelectedAct(main);
        }

    }

    return (
        <div className="parent">
            <div className="div0"><h1 onClick={handleMenu}>Hansel Kang</h1></div>
            <div className="div1">
                <div>Portfolio</div>
                <br />
                <div onClick={handleMenu}>Programming</div>
                <div onClick={handleMenu}>Photograph</div>
                <div onClick={handleMenu}>Paint & Previous</div>
                <br />
                <div onClick={handleMenu}>email</div>

                <div>{selectedAct}</div>
            </div>
            <div className="div2"><MainDrawing /></div>
            <div className="div3">
                Software Developer,<br />
                Photographer<br />
                in Scotland.<br /><br />
                learning, <br />
                planning, <br />
                designing.<br />
            </div>
            <div className="div4">
                <a href="https://www.linkedin.com/in/hansel-kang/" target="_blank" >
                    <img src={linkedin} width="30" />
                </a>
                <a href="https://github.com/hanselkang" target="_blank" >
                    <img src={github} width="30" />
                </a>
                <a href="https://twitter.com/hihansel" target="_blank" >
                    <img src={twitter} width="30" />
                </a>
                <a href="https://www.instagram.com/hansel_in_scotland/" target="_blank">
                    <img src={instagram} width="30" />
                </a>
                <a href="https://youtu.be/4i7ZvnOR9NU" target="_blank" >
                    <img src={youtube} width="30" />
                </a>
            </div>
            <div className="div5">2022 hanseul.com all rights reserved</div>
        </div>
    )
}

export default MainContainer