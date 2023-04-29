import React, {useState} from 'react';
import "./HeroHome.scss"
import smiling from "../../../img/smilingP.svg";
import {IoIosCloseCircle} from "react-icons/io";
// import heroImg1 from "./../../../img/Black1.svg"
// import heroImg2 from "./../../../img/Black2.svg"
// import heroImg3 from "./../../../img/Black3.svg"
// import heroImg4 from "./../../../img/Black4.svg"
// import heroImg5 from "./../../../img/Black5.svg"
// import heroImg6 from "./../../../img/Black6.svg"
// import heroImg7 from "./../../../img/Black7.svg"
// import heroImg8 from "./../../../img/Black8.svg"
// import heroImg9 from "./../../../img/Black9.svg"
// import heroImg10 from "./../../../img/Black10.svg"


const HeroHome = () => {

    const [start, setStart] = useState(true)

    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    {/*<div className="heroAbout--img">*/}
                    {/*    <img className="heroAbout--img__black2" src={heroImg2} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black4" src={heroImg4} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black3" src={heroImg3} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black9" src={heroImg9} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black1" src={heroImg1} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black10" src={heroImg10} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black5" src={heroImg5} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black6" src={heroImg6} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black7" src={heroImg7} alt=""/>*/}
                    {/*    <img className="heroAbout--img__black8" src={heroImg8} alt=""/>*/}
                    {/*</div>*/}
                    <div className="hero--logos">
                        <h1>MOTION WEB <br/><b>IT</b> ACADEMY</h1>
                        <p>Лицензированная IT академия в Бишкеке</p>
                        <button onClick={() => setStart(!start)}>Оставить заявку</button>
                    </div>
                </div>
            </div>

            <div className={start ? "modal" : "modal active"} onClick={() => setStart(true)}>
                <div className="modal--content" onClick={e => e.stopPropagation()}>
                    <img src={smiling} alt=""/>
                    <p onClick={() => setStart(true)}><IoIosCloseCircle/></p>

                    <input type="text" placeholder="Имя"/>
                    <input type="number" placeholder="Номер"/>
                    <div className="modal--content__label">
                        <input id="checkbox1" type="checkbox"/>
                        <label htmlFor="checkbox1">Я соглашаюсь на обработку персональных данных</label>
                    </div>
                    <button>Оставить заявку</button>
                </div>
            </div>

        </section>
    );
};

export default HeroHome;