import React from 'react';
import smile from "./../img/smilingP.svg"

const SingForm = () => {
    return (
        <section id="application">
            <div className="container">
                <div className="application">

                    <div className="application--text">
                        <h1>Оставить заявку на обучение <br/> или получить консультацию</h1>
                        <p>Менеджер свяжется с вами в течение 30 минут <br/> и ответит на все интересующие вопросы.</p>
                    </div>

                    <div className="application--img">
                        <img src={smile} alt=""/>
                        <p>Менеджер скоро свяжется с вами</p>
                    </div>


                </div>
            </div>
        </section>

    );
};

export default SingForm;