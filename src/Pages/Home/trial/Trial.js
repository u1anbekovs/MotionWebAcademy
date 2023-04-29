import React, {useState} from 'react';
import "./Trial.scss"
import cardTrial from "./../../../img/cardTrial.svg"
import smiling from "./../../../img/smilingP.svg"
import {IoIosCloseCircle} from "react-icons/io"

const Trial = () => {

    const [start, setStart] = useState(true)

    return (
        <section id="trial">

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
                    <button>Записаться</button>
                </div>
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