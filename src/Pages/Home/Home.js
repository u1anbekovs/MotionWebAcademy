import React from 'react';
import Application from "./application/Application";
import Accordion from "./accordion/Accordion";
import Slide from "./slide/Slide";
import Student from "./studentProjects/Student";
import Choice from "./choice/Choice";
import Trial from "./trial/Trial";
import Courses from "./courses/Courses";
import HeroHome from "./heroHome/HeroHome";
import DetailUs from "./detailUs/DetailUs";

const Home = () => {
    return (
        <div>
            <HeroHome/>
            <DetailUs/>
            <Courses/>
            <Trial/>
            <Choice/>
            <Student/>
            <Slide/>
            <Accordion/>
            <Application/>
        </div>
    );
};

export default Home;