import React from 'react';
import "./Talking.scss"

const Talking = () => {
    return (
        <section id="talking">
            <div className="container">
                <div className="talking">


                    <div className="talking--block">
                        <h1>Зачем вам <br/> <span>IT-КЛУБ?</span></h1>
                        <p>Анализируя курсы в Бишкеке мы решили открыть клуб, который поможет студентам подготовиться к
                            реальным проектам. Участники не заканчивая курс смогут понять как работать в команде,
                            научатся презентовать свои работы и поймут какие проблемы бывают на стадии разработки</p>
                    </div>
                    <div className="talking--block1">
                        <div>
                            <h1>3</h1>
                            <p>Месяца</p>
                        </div>
                        <div>
                            <h1>Talking club</h1>
                            <p>Каждую неделю</p>
                        </div>
                        <div>
                            <h1>3</h1>
                            <p>Проекта</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Talking;