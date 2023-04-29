import React from 'react';
import "./Founders.scss"
import founders from "./../../../img/founders.svg"
import founders1 from "./../../../img/founders1.svg"

const Founders = () => {
    return (
        <section id="founders">
            <div className="container">
                <div className="founders">
                    <div className="founders--carp">
                        <h2>Основатели</h2>
                        <p>Motion web IT академия была <br/> основана в апреле 2021 года <br/> по инициативе Курманбека <br/> Жоошбаева и
                            Аскерова Канатбека</p>
                    </div>
                    <div className="founders--carp">
                        <img src={founders} alt=""/>
                        <h3>Курманбек Жоошбаев</h3>
                        <h4>Основатель</h4>
                    </div>
                    <div className="founders--carp">
                        <img src={founders1} alt=""/>
                        <h3>Канатбек Аскеров</h3>
                        <h4>Сооснователь</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;