import React from 'react';
import "./Header.scss"
import logoHeader from "../../img/Vector.svg"
import {GrLanguage} from "react-icons/gr"
import {NavLink} from "react-router-dom";


const Header = () => {


    return (
        <section id="header">
            <div className="container">
                <div className="header">

                    <img src={logoHeader} alt=""/>

                    <div className="header--pages">
                        <NavLink to={`/`}>Главное</NavLink>
                        <NavLink to={`/about-us`}>О нас</NavLink>
                        <div className="courses">
                            <a href="#">О курсах</a>
                            <div className="ul">
                                <NavLink to={`/front-end`}>Frontend</NavLink> <br/>
                                <NavLink to={`/ui-ux`}>UI/UX design</NavLink> <br/>
                                <NavLink to={`/back-end`}>Backend</NavLink>
                            </div>
                        </div>
                        <NavLink to={`/club`}>Клуб</NavLink>
                        <NavLink to={`/contacts`}>Контакты</NavLink>
                    </div>

                    <div className="header--languages">
                        <GrLanguage className="header--languages__icon"/>
                        <a href="#">КР/</a>
                        <a href="#">РУС/</a>
                        <a href="#">ENG</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;