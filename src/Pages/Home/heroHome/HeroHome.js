import React, {useState} from 'react';
import "./HeroHome.scss"
import Modal from "../../../modal/Modal";


const HeroHome = () => {

    const [start, setStart] = useState(true)
    const startForm = () => {
        setStart(true)
    }

    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--logos">
                        <h1>MOTION WEB <br/><b>IT</b> ACADEMY</h1>
                        <p>Лицензированная IT академия в Бишкеке</p>
                        <button onClick={() => setStart(!start)}>Оставить заявку</button>
                    </div>
                </div>
            </div>

            <div className={start ? "modal" : "modal active"} onClick={() => setStart(true)}>
                <Modal startForm={startForm}/>
            </div>

        </section>
    );
};

export default HeroHome;