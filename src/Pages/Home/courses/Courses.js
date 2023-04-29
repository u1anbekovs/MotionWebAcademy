import React from 'react';
import "./Courses.scss"
import frontEndImg from "./../../../img/frontendImg.svg"
import uiuxImg from "./../../../img/uiuxImg.svg"
import backendImg from "./../../../img/backendImg.svg"

const Courses = () => {
    return (
        <section id="courses">
            <div className="container">
                <div className="courses">

                    <div className="courses--cards">
                        <img src={frontEndImg} alt=""/>
                        <h1>FRONTEND</h1>
                        <p>Фронтенд-разработчик — это специалист, который создаёт пользовательские интерфейсы</p>
                        <div className="courses--cards__span">
                            <span>HTML</span>
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>JS</span>
                            <span>CSS</span>
                            <span>SASS</span>
                            <span>+Английский</span>
                            <span>7 месяцев</span>
                        </div>
                        <button className="courses--cards__btn">Подробнее</button>
                        <button className="courses--cards__btn1">Оставить заявку</button>
                    </div>
                    <div className="courses--cards">
                        <img src={uiuxImg} alt=""/>
                        <h1>UX/UI DESIGN</h1>
                        <p>UX/UI-дизайн — это <br/> процесс создания интерактивных, удобных интерфейсов</p>
                        <div className="courses--cards__span">
                            <span>Figma</span>
                            <span>Adobe XD</span>
                            <span>Photoshop</span>
                            <span>+Английский</span>
                            <span>3 месяцев</span>
                        </div>
                        <button className="courses--cards__btn">Подробнее</button>
                        <button className="courses--cards__btn1">Оставить заявку</button>
                    </div>
                    <div className="courses--cards">
                        <img src={backendImg} alt=""/>
                        <h1>BACKEND</h1>
                        <p>Бэкенд-разработчик — это специалист, который отвечает за внутреннюю и вычислительную логику
                            веб-сайта</p>
                        <div className="courses--cards__span">
                            <span>HTML</span>
                            <span>React</span>
                            <span>JS</span>
                            <span>CSS</span>
                            <span>SASS</span>
                            <span>+Английский</span>
                            <span>7 месяцев</span>
                        </div>
                        <button className="courses--cards__btn">Подробнее</button>
                        <button className="courses--cards__btn1">Оставить заявку</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Courses;