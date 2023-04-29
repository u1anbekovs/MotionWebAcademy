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
                        <NavLink to={`/`} onClick={() => window.scroll(0, 0)}>Главное</NavLink>
                        <NavLink to={`/about-us`} onClick={() => window.scroll(0, 0)}>О нас</NavLink>
                        <div className="courses">
                            <a href="#">О курсах</a>
                            <div className="ul">
                                <NavLink to={`/front-end`} onClick={() => window.scroll(0, 0)}>Frontend</NavLink> <br/>
                                <NavLink to={`/ui-ux`} onClick={() => window.scroll(0, 0)}>UI/UX design</NavLink> <br/>
                                <NavLink to={`/back-end`} onClick={() => window.scroll(0, 0)}>Backend</NavLink>
                            </div>
                        </div>
                        <NavLink to={`/club`} onClick={() => window.scroll(0, 0)}>Клуб</NavLink>
                        <a href="#footer">Контакты</a>
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