import React from 'react';
import "./Application.scss"

const Application = () => {
    return (
        <section id="application">
            <div className="container">
                <div className="application">

                    <div className="application--text">
                        <h1>Оставить заявку на обучение <br/> или получить консультацию</h1>
                        <p>Менеджер свяжется с вами в течение 30 минут <br/> и ответит на все интересующие вопросы.</p>
                    </div>

                    <div className="application--inputs">
                        <input type="text" placeholder="Имя"/>
                        <input type="number" placeholder="Номер"/>
                        <input type="email" placeholder="Электронная почта"/>
                        <div className="application--inputs__label">
                            <input id="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox">Я соглашаюсь на обработку персональных данных</label>
                        </div>
                        <button>Оставить заявку</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Application;