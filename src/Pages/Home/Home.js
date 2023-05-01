import React, {useState} from 'react';
import Application from "./application/Application";
import Accordion from "./accordion/Accordion";
import Slide from "./slide/Slide";
import Student from "./studentProjects/Student";
import Choice from "./choice/Choice";
import Trial from "./trial/Trial";
import Courses from "./courses/Courses";
import HeroHome from "./heroHome/HeroHome";
import DetailUs from "./detailUs/DetailUs";
import SingForm from "../../validation/SingForm";

const Home = () => {

    const [submitted, setSubmitted] = useState(false)
    const submitForm = () => {
        setSubmitted(true)
    }

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
            {!submitted ? <Application submitForm={submitForm}/> : <SingForm/>}
        </div>
    );
};

export default Home;