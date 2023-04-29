import React from 'react';
import "./Student.scss"
import studentImg from "./../../../img/Rectangle 49.svg"
import studentImg1 from "./../../../img/Rectangle 50.svg"
import studentImg2 from "./../../../img/Rectangle 51.svg"
import studentImg3 from "./../../../img/Rectangle 52.svg"
import {useState} from "react";

const Student = () => {
    const [student, setStudent] = useState(false)
    return (
        <section id="student">
            <div className="container">
                <div className="student">
                    <div className="student--text">
                        <h3>Проекты студентов</h3>
                        <h1>MOTIN WEB <br/> IT ACADEMY</h1>
                    </div>
                    <img src={studentImg} alt=""/>
                    <img src={studentImg1} alt=""/>
                    <img src={studentImg2} alt=""/>
                    <img src={studentImg3} alt=""/>
                    {
                        student ? <img src={studentImg} alt=""/> : ""
                    }
                    {
                        student ? <img src={studentImg1} alt=""/> : ""
                    }
                    {
                        student ? <img src={studentImg2} alt=""/> : ""
                    }
                    {
                        student ? <img src={studentImg3} alt=""/> : ""
                    }

                    <p onClick={() => setStudent(!student)}>{student ? "Повернуть" : "Показать ещё"}</p>

                </div>
            </div>
        </section>
    );
};

export default Student;