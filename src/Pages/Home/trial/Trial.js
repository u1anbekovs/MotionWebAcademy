import React, {useState} from 'react';
import "./Trial.scss"
import cardTrial from "./../../../img/cardTrial.svg"
import Modal from "../../../modal/Modal";

const Trial = () => {

    const [start, setStart] = useState(true)
    const startForm = () => {
        setStart(true)
    }
    return (
        <section id="trial">

            <div className={start ? "modal" : "modal active"} onClick={() => setStart(true)}>
                <Modal startForm={startForm}/>
            </div>


            <div className="container">
                <div className="trial">
                    <img src={cardTrial} alt=""/>


                    <div className="trial--block">
                        <div className="trial--block__text">
                            <h1>ПРОБНЫЕ УРОКИ</h1>
                            <p>Прочуствуй дружную атмосферу нашей академии! Оставь заявку на пробный урок и стань ближе
                                к своей цели!</p>
                        </div>
                        <div className="trial--block__text">
                            <h2>18 февраля в 18:00 мастер класс по FRONTEND</h2>
                            <button onClick={() => setStart(false)}>Записаться</button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Trial;