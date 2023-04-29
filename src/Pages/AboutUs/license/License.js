import React from 'react';
import "./License.scss"
import license from "./../../../img/license.svg"

const License = () => {
    return (
        <section id="license">
            <div className="container">
                <div className="license">
                    <div className="license--IT">
                        <h2>Наша лицензия</h2>
                        <p>Наша программа по IT прошла проверку в Министерстве образования КР, что доказывает Motion web
                            имеет право на:</p>
                        <div className="license--IT__01">
                            <h1>01.</h1>
                            <h3>Обучать IT</h3>
                        </div>
                        <hr/>
                        <div className="license--IT__01">
                            <h1>02.</h1>
                            <h3>Направлять на обучение <br/> и стажировку за границу</h3>
                        </div>
                        <hr/>
                    </div>
                    <img src={license} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default License;